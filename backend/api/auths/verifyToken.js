const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config/environment');
const VerifyToken = express.Router();

VerifyToken.use(function (req, res, next){
  let token = req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json({ auth: false, message: "No Token. Feed me one!"});
  }
  jwt.verify(token, config.secrets.session, function (err, decoded) {
    if (err) {
      return res.status(401).json({ auth:false, message: "Not an Authorized User! Get Out!"});
    }
    req.body.user_id = decoded.user_id;
    req.body.username = decoded.username;
    next();
  });
});

module.exports = VerifyToken;