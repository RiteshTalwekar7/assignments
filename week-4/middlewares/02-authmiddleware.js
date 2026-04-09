
//  Implement an authentication middleware that checks for a valid API key in the request headers.

const express = require('express');
const app = express();
const VALID_API_KEY = '100xdevs_cohort3_super_secret_valid_api_key'; // key is 100xdevs-api-key use that API key for authenticate user


// Middleware to check for a valid API key
function authenticateAPIKey(req, res, next) {
    try {
        const API_KEY = req.header('VALID_API_KEY');
        API_KEY = API_KEY.trim();
        if (!API_KEY) {
            res.status(401).json({
                message: "Invalid or missing API key"
            });
        }
        if (API_KEY == VALID_API_KEY) {
            next();
        } else {
            res.status(401).json({
                message: "Invalid or missing API key"
            })
        }
    }
    catch (e) {
        res.status(401).json({
            message: "Invalid or missing API key"
        })
    }
}

app.use(authenticateAPIKey);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Access granted' });
});

// app.listen(3000, () => console.log("Server has been started"));

module.exports = app;


