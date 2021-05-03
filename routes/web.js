const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.get('/', postController.index);
router.get('/new-post', postController.create);
router.post('/new-post', postController.store);

module.exports = router;
