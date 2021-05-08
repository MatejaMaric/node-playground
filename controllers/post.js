const Post = require('../models/post');

module.exports = {

  index(req, res) {
    Post.find().lean().exec((err, posts) => {
      if (err) console.log(err);
      res.render('home', {
        title: 'Home Page',
        auth: req.isAuthenticated(),
        home: true,
        posts: posts
      });
    });
  },

  create(req, res) {
    res.render('new-post', {
      title: 'Make A New Post',
      auth: req.isAuthenticated(),
      newPost: true
    });
  },

  store(req, res) {
    const newPost = new Post({
      'title': req.body.title,
      'text': req.body.text
    });
    newPost.save()
      .then(() => res.redirect('/'))
      .catch(err => {
        console.log(err);
        res.redirect('/new-post');
      });
  },

  destroy(req, res) {
    Post.findByIdAndRemove(req.params.id, (err, post) => {
      if (err) console.log(err);
      res.redirect('/');
    });
  }

};
