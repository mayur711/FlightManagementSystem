
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const bookingRoutes = require('./Routes/bookingRoutes');

const cors=require('cors');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// const swaggerUi = require('swagger-ui-express');
// const swaggerJsdoc = require('swagger-jsdoc');

mongoose.connect("mongodb+srv://test:test@cluster0.vphey.mongodb.net/BookingDetails?retryWrites=true&w=majority",()=>
{
  console.log("connected")
});

app.use(cors());
// app.use(cors());
app.use('/user', bookingRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

  module.exports=app;