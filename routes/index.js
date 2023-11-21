const express = require('express');

const app = express();

const htmlRoutes = require('./htmlRoutes');

app.use(htmlRoutes);

module.exports = app;