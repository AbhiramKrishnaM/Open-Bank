require("dotenv").config();

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.APP_PORT || 4001;

app.listen(port, () => {
  console.log("Application running at ", port);
});
