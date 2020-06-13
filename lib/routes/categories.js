'use strict';

const express = require('express');
const router = express.Router();


const categories = require('../models/categories/categories-model');

// ************************************************\\

// Products (GET, POST, PUT, DELETE)

router.get('/categories', showCategories);
router.get('/categories/:id', getCategories);
router.post('/categories', postCategories);
router.put('/categories/:id', putCategories);
router.delete('/categories/:id', deleteCategories);

// ************************************************\\


function showCategories(req, res, next){
  categories
    .get()
    .then(data => {res.status(200).json(data);})
    .catch(next);
}



function getCategories(req, res, next){
  categories
    .get(req.params.id)
    .then((data) => res.status(200).json(data))
    .catch(next);
}
    


function postCategories(req, res, next){
  console.log('I am inisde postprod route !@@@@@@@@');
    
  categories
    .post(req.body)
    .then(data => {res.status(201).json(data);})
    .catch(next);
}
    


function putCategories(req, res, next){
  console.log('----->>>> testing update route ');

  categories
    .update(req.params.id, req.body)
    .then(data => res.status(200).json(data))
    .catch(next);
  
}

function deleteCategories(req, res, next){
  console.log('----->>>> testing delete route ');

  categories
    .delete(req.params.id)
    .then(data => { res.status(200).json(data);})
    .catch(next);

}   

    
  
module.exports = router;