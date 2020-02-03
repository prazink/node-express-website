const express = require('express');

const router = express.Router(); // instance of this express router

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('All Speakers!!!');
    });

    router.get('/:name', (req, res, next) => {
        return res.send(`Speaker detail page for ${req.params.name}`);
    });

    return router;
}