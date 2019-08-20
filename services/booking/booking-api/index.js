const express = require('express');
const logger = require('@try-lerna/logger');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/booking', (req, res) => {
  logger.info('/booking was called');
  res.send({
    message: `Hello from booking service, ${req.query.name || 'World'}!`
  });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))