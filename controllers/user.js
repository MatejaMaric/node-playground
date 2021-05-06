module.exports = {

  register(req, res) {
    console.log(req.body);
    res.redirect('/register');
  },

  login(req, res) {
    console.log(req.body);
    res.redirect('/login');
  },

  logout(req, res) {
    res.redirect('/');
  },

  registerView(req, res) {
    res.render('register', {title: 'Register', register: true});
  },

  loginView(req, res) {
    res.render('login', {title: 'Login', login: true});
  }

};
