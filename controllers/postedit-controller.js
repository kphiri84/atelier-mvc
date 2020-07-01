const Post = require('../models/Post');

const postEdit = (req, res, next) => {
    Post.postEdit((err, results) => {
        req.posts = results;
        next();
    })
}

module.exports = { postEdit };