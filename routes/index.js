//pulling in required files/packages
const express = require('express');

const htmlRoutes = require('./htmlRoutes');
const apiRoutes = require('./apiRoutes');

//calling the express package
const app = express();

//which routes/file paths to use
app.use(htmlRoutes);
app.use('/api', apiRoutes);

//exporting the express package(app)
module.exports = app;