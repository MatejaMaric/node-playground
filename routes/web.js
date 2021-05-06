const express = require('express');
const passport = require('passport');
const router = express.Router();

const postController = require('../controllers/post');
const userController = require('../controllers/user');

const isAuth = (req, res, next) => {
  if (req.isAuthenticated()) next();
  else res.redirect('/login');
};

router.get('/', postController.index);
router.get('/new-post', isAuth, postController.create);
router.post('/new-post', isAuth, postController.store);
router.get('/remove-post/:id', isAuth, postController.destroy);

router.get('/register', userController.registerView);
router.get('/login', userController.loginView);

router.post('/register', userController.register);
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/new-post'
}));
router.get('/logout', userController.logout);

module.exports = router;
