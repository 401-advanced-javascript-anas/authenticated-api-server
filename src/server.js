'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const router = require('./auth/routes');
const extraRoutes = require('./extra-routes');
const modelRouter = require('../lib/routes/routes');


const notFoundHandler = require('../lib/middleware/404');
const errorHandler = require('../lib/middleware/500');
const timestamp = require('../lib/middleware/timestamp');
const logRequest = require('../lib/middleware/logger');



// const categoriesRouter = require('./routes/categories');
// const productsRouter = require('./routes/products');

const app = express();


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(timestamp);
app.use(logRequest);

// *******************************************\\

// Products (GET, POST, PUT, DELETE)
// app.use('/api/v1', productsRouter);

app.use(modelRouter);
app.use(router);
app.use(extraRoutes);

// ************************************************\\

// Categories (GET, POST, PUT, DELETE)

// app.use('/api/v1', categoriesRouter);



// *******************************************\\

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) =>{
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => {console.log(`App is listening on ${PORT}`);
    });
  },
};