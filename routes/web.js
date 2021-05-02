const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find().lean().exec((err, posts) => {
    res.render('home', {
      title: 'Home Page',
      home: true,
      posts: posts
    });
  });
});

router.get('/new-post', (req, res) => {
  res.render('new-post', {
    title: 'Make A New Post',
    newPost: true
  });
});

router.post('/new-post', (req, res) => {
  const newPost = new Post({
    'title': req.body.title,
    'text': req.body.text
  });
  newPost.save().then(() => res.redirect('/'));
});

module.exports = router;
