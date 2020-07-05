'use strict';

const express = require('express');
const router = express.Router();


const products = require('../models/products/products-model');
// ************************************************\\
// Products (GET, POST, PUT, DELETE)

router.get('/products', showProducts);
router.get('/products/:id', getProducts);
router.post('/products', postProducts);
router.put('/products/:id', putProducts);
router.delete('/products/:id', deleteProducts);

// ************************************************\\

function showProducts(req, res, next){
  products
    .get()
    .then(data => {res.status(200).json(data);})
    .catch(next);
}



function getProducts(req, res, next){
  products
    .get(req.params.id)
    .then((data) => res.json(data))
    .catch(next);
}
    


function postProducts(req, res, next){
  console.log('I am inisde postprod route !@@@@@@@@');
    
  products
    .post(req.body)
    .then(data => {res.status(201).json(data);})
    .catch(next);
}
    


function putProducts(req, res, next){
  console.log('----->>>> testing update route ');

  products
    .update(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(next);
  
}

function deleteProducts(req, res, next){
  console.log('----->>>> testing delete route ');

  products
    .delete(req.params.id)
    .then(data => { res.status(200).json(data);})
    .catch(next);

}   

    
  
module.exports = router;
