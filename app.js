
require('dotenv').config();

const Server = require('./Models/server');

const MyServer = new Server();

MyServer.listen();