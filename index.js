const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv').config();

const webRoutes = require('./routes/web');

const app = express();
mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use('/', webRoutes);

app.listen(8080, () => console.log('Server started on port 8080.'));
