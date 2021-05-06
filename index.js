const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoSessionStore = require('connect-mongo');
require('dotenv').config();

const webRoutes = require('./routes/web');

const app = express();

mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(session({
  secret: process.env.APP_SECRET,
  resave: false,
  saveUninitialized: true,
  store: MongoSessionStore.create({
    mongoUrl: process.env.DB_CONN
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use('/', webRoutes);

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));
