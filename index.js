const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(express.urlencoded({extended: false}));

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

app.post('/new-post', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

app.listen(8080, () => console.log('Server started on port 8080.'));
