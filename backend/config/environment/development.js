'use strict()';

let local = require('../local.env.js');

module.exports = {
  selfURL: 'http://localhost:8000',
  DEBUG: '',
  port: 8001,
  ip: '0.0.0.0',
  seedDB: true,
  webApp: {
    url: "http://localhost:80"
  }
};

