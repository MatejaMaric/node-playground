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
        req.flash('msg', 'You successfully registered.');
        res.redirect('/login');
      });
    }
    else {
      req.flash('msg', 'Validation errors...');
      res.redirect('/register');
    }
  },

  login(req, res) {
    console.log(req.body);
    res.redirect('/login');
  },

  logout(req, res) {
    res.redirect('/');
  },

  registerView(req, res) {
    res.render('register', {
      title: 'Register',
      register: true,
      msg: req.flash('msg')
    });
  },

  loginView(req, res) {
    res.render('login', {
      title: 'Login',
      login: true,
      msg: req.flash('msg')
    });
  }

};
