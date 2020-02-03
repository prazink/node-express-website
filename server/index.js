const express = require('express');
const app = express(); // give access to the instances of express object

const routes = require('./routes'); //mouting the route from routes
app.use(express.static('public')); // get the folder Public where assets are in
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204); // empty response, nothing to see here

});

app.use('/', routes()); // Add path and callback to creating routing middleware

app.listen(3000);

module.export = app;
