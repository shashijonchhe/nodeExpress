
const express = require('express');
const postController = require('../controllers/post');
const router = express.Router(); //method





router.get('/',postController.getPosts);
router.post("/post",postController.createPost)


module.exports = router;
