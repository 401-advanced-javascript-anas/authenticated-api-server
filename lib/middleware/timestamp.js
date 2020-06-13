'use strict';

function timestamp(req, res, next){
  let currentTime = new Date().toDateString();
  req.timestamp = currentTime;
  next();

}

module.exports = timestamp;