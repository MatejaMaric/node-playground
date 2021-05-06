const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const userController = require('../controllers/user');

router.get('/', postController.index);
router.get('/new-post', postController.create);
router.post('/new-post', postController.store);
router.get('/remove-post/:id', postController.destroy);

router.get('/register', userController.registerView);
router.get('/login', userController.loginView);

router.post('/register', userController.register);
router.post('/login', userController.login);

router.get('/logout', userController.logout);

module.exports = router;
