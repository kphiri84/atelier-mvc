const express = require('express');
const app = express();
const router = express.Router();

const showHomepage = (req, res, next) => {
    res.render('home');
    }

module.exports = { showHomepage };