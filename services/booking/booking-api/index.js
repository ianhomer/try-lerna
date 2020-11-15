const express = require("express");
const logger = require("@try-lerna/logger");

const PORT = process.env.PORT || 8080;
const app = express();

app.get("/foo", (req, res) => {
  logger.info("booking-api /foo was called");
  res.send({
    message: `Booking service - ${req.query.name || "n/a"}!`,
  });
});

app.listen(PORT, () => console.log(`Booking API listening on port ${PORT}`));
