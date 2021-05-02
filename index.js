const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const webRoutes = require('./routes/web');

const app = express();
mongoose.connect('mongodb://localhost/playground_db', {useNewUrlParser: true, useUnifiedTopology: true});

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

app.use('/', webRoutes);

app.listen(8080, () => console.log('Server started on port 8080.'));
