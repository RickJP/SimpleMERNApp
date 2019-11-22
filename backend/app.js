'use strict()';

process.env.VENDOR_NODE_ENV = process.env.VENDOR_NODE_ENV || 'development';

const express = require('express');
const config = require('./config/environment');
const mongoose = require('mongoose');

// Connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(config.db.URI, config.mongo.options);

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});
mongoose.connection.on('connected', () => {
  console.log('MongoDB connection established');
});
mongoose.connection.on('disconnected', () => {
  console.log('MongoDB connection established');
});


const app = express();
const server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
require('./config/seed');


// Start server
server.listen(config.port, config.ip, () => {
  console.log('Express server listening on %d, in %s mode',
  config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;