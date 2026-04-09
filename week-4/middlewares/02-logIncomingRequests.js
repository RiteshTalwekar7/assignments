//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const { json } = require('express/lib/response');
const app = express();

function logRequests(req, res, next) {
    const timestamp = new Date().toISOString();

    // This produces exactly what the test expects: "GET / - 2024-04-07T05:12:34.567Z"
    console.log(`${req.method} ${req.url} - ${timestamp}`);

    next();   // ← Critical: always continue to the route
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});


module.exports = app;
