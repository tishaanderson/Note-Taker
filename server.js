const express = require('express');

const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();


//middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);
app.use(express.static('public'));

app.use(routes);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`));