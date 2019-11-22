'use strict()';

let local = require('../local.env.js');

module.exports = {
  // Server IP
  ip: process.env.IP || undefined,

  // Control debug level for modules using visionmed/debug
  DEBUG: '',

  //Server port
  port: 8080,

  mongo: {
    uri: local.mongo.uri
  },

  selfURL: 'http://localhost',

  webApp: {
    url: "http://localhost: 80"
  }
};

