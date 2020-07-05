'use strict';

const schema = require('./categories-schema');
const Model = require('../model');

class Categories extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = new Categories(schema);




