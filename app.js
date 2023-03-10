require('dotenv').config();
require('./config/database').connect();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: 'SECRET'
    })
)

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

app.use(express.json());

module.exports = { app, router: express.Router() };

