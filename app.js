const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index");

const server = express();

server.name = "API";

server.use(morgan("dev"));

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use("/", routes);

module.exports = server;
