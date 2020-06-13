'use strict';

// let productsModel = require('../models/products/products-model');
// let categoriesModel = require(`../models/categories/categories-model`);


function getParams (req, res, next) {
  let model = req.params.model;

  switch (model) {
  case 'products':
    // req.model = productsModel;

    req.model = require(`../models/${model}/${model}-model`);
    
    next();
    return;

  case 'categories':

    
  
    // req.model = categoriesModel;
    // console.log('hiiiiiiiiiii',req.model);

    req.model = require(`../models/${model}/${model}-model`);
    
    next();
    return;

  default:
    next('Invalid Model');
    return;
  }
}

module.exports = getParams;

