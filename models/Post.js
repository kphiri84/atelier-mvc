const connection = require('../db/conf')

const Post = {}

Post.getAll = (callback) => {
    connection.query(
        'SELECT * FROM posts',
        (err, results, fields) => {
            callback(err, results, fields);
        }
    )
}

Post.postOne = (callback) => {
    const formData = req.body;
    connection.query('INSERT INTO post SET ?', formData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde du post");
        } else {
            res.sendStatus(200);
        }
        })
    };

    Post.postEdit = (callback) => {
        const idPost = req.params.id;
        const formData = req.body;
        connection.query('UPDATE post ? WHERE id = ?', [formData, idPost], err => {
            if (err) {
                console.log(err);
                res.status(500).send("Erreur lors de la modification du post");
            } else {
                res.sendStatus(200);
            }
            })
        };
module.exports = Post;