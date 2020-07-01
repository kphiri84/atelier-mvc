const express = require('express');

const { getAllPosts } =
    require('../controllers/posts-controller');

const { showHomepage } =
    require('../controllers/pages-controller');

const { postOne } =
    require('../controllers/newpost-controller')

const { postEdit } =
    require('../controllers/postedit-controller')

const router = express.Router();

router.get('/', showHomepage)

router.get('/posts', getAllPosts)

router.get('/posts/new', postOne)

router.get('/posts/:id/edit', postEdit)


module.exports = router;