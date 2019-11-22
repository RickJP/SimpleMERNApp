'use strict()';

let local = require('../local.env.js');

module.exports = {
  // Server IP
  ip: '0.0.0.0',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '',

  // Server port
  port: 8080,

  // MongoDB connection options
  mongo: {
    url: 'mongodb://localhost:27017/vendor_test_erp'
  },
  selfURL: 'http://localhost',

  webApp: {
    url: "http://localhost:80"
  }
};

