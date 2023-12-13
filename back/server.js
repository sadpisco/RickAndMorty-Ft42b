const express = require('express');
const router = require('./routes/routeIndex');
const morgan = require ('morgan');
const cors = require('cors');
const server = express();

//MiddleWares
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());
server.use(router);

module.exports = server;