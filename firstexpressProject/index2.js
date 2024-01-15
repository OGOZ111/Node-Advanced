"use strict";

const http = require("http");

const express = require("express");
const app = express();

const port = 3000;
const host = "localhost";

const server = http.createServer(app);

app.get("/", (req, res) => res.send("<h1>Hello World 2!</h1>"));

server.listen(port, host, () =>
  console.log(`Server running at http://${host}:${port}/`)
);
