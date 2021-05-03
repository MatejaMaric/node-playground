const Post = require('../models/post');

module.exports = {

  index(req, res) {
    Post.find().lean().exec((err, posts) => {
      res.render('home', {
        title: 'Home Page',
        home: true,
        posts: posts
      });
    });
  },

  create(req, res) {
    res.render('new-post', {
      title: 'Make A New Post',
      newPost: true
    });
  },

  store(req, res) {
    const newPost = new Post({
      'title': req.body.title,
      'text': req.body.text
    });
    newPost.save().then(() => res.redirect('/'));
  }

};
