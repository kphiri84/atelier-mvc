const Post = require('../models/Post');

const postOne = (req, res, next) => {
    Post.postOne((err, results) => {
        req.posts = results;
        next();
    })
}

module.exports = { postOne };