const express = require('express');
const logger = require('@try-lerna/logger');

const PORT = process.env.PORT || 8081;
const app = express();

app.get('/foo', (req, res) => {
  logger.info('user-api /foo was called');
  res.send({
    message: `User service - ${req.query.name || 'N/A'}!`
  });
})

app.listen(PORT, () => console.log(`User API listening on port ${PORT}`))