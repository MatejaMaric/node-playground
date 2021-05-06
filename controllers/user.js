const User = require('../models/user');
const bcrypt = require('bcryptjs');

module.exports = {

  register(req, res) {
    if (req.body.password === req.body.confirmPassword) {
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
      });
      newUser.save().then(() => {
        req.login(newUser, () => res.redirect('/new-post'));
      });
    }
    else {
      req.flash('msg', 'Validation errors...');
      res.redirect('/register');
    }
  },

  logout(req, res) {
    req.logout();
    res.redirect('/');
  },

  registerView(req, res) {
    res.render('register', {
      title: 'Register',
      auth: req.isAuthenticated(),
      register: true,
      msg: req.flash('msg')
    });
  },

  loginView(req, res) {
    res.render('login', {
      title: 'Login',
      auth: req.isAuthenticated(),
      login: true,
      msg: req.flash('msg')
    });
  }

};
