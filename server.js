//pulling in required files/packages
const express = require('express');

//where to find the routes to use
const routes = require('./routes');

//which port to use
const PORT = process.env.PORT || 3001;
const app = express();


//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);
app.use(express.static('public'));

app.use(routes);

//where and how to deploy the app
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`));