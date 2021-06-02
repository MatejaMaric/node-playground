const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoSessionStore = require('connect-mongo');
const flash = require('connect-flash');
const passport = require('passport');
const {port, mongoUrl, masterKey} = require("./config/env")

const oldForm = require('./utils/middleware/oldForm');

const webRoutes = require('./routes/web');

const app = express();

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(session({
  secret: masterKey,
  resave: false,
  saveUninitialized: true,
  store: MongoSessionStore.create({
    mongoUrl: mongoUrl
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}));

app.use(flash());

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

app.use(oldForm);

app.use('/', webRoutes);

app.listen(port, () => console.log(`Server started on port ${port}.`));
