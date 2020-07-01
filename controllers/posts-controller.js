const Post = require('../models/Post');

const getAllPosts = (req, res, next) => {
    Post.getAll((err, results) => {
        req.posts = results;
        next();
    })
}

module.exports = { getAllPosts };