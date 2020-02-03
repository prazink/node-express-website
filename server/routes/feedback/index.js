const express = require('express');

const router = express.Router(); // instance of this express router

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Feedback');
    });

    router.post('/', (req, res, next) => {
        return res.send('Form Sent');
    });

    return router;
}