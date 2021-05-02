const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    home: true
  });
});

app.get('/new-post', (req, res) => {
  res.render('new-post', {
    title: 'Make A New Post',
    newPost: true
  });
});

app.listen(8080, () => console.log('Server started on port 8080.'));
