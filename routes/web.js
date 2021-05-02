const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    home: true
  });
});

router.get('/new-post', (req, res) => {
  res.render('new-post', {
    title: 'Make A New Post',
    newPost: true
  });
});

router.post('/new-post', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
