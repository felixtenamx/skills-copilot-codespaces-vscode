// Create web server

// Import modules

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

//Handle Request

router.get('/', (req, res) => {
    Comment.find()
        .then(comments => res.json(comments))
        .catch(err => res.status(400).json('Error: ' + err));
}