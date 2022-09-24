const express = require('express');
// Import routes
const { htmlRoutes, apiRoutes } = require('./routes')

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', apiRoutes)
app.use(express.static('public'));

app.use('/', htmlRoutes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);