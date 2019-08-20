const express = require('express');
const logger = require('@try-lerna/logger');

const PORT = process.env.PORT || 8081;
const app = express();

app.get('/greeting', (req, res) => {
  logger.info('/greeting was called');
  res.send({
    message: `Hello, ${req.query.name || 'World'}!`
  });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))