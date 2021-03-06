
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const adminRoutes = require('./Routes/admin');
const cors=require('cors');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require ('./Routes/admin');

const options = {
 
   swaggerDefinition: {
    info: {
      title: 'Flight Swagger Documentation',
      description: 'Test API with autogenerated swagger doc',
      contact:{
          Name:"Mayur Mandlik"
      },
      servers:["http://localhost:5000"]
        }
  },
  apis: ['./Routes/*.js']
};
const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

mongoose.connect("mongodb+srv://test:test@cluster0.vphey.mongodb.net/Flight?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
 },()=>
{
  
  console.log("connected")
});

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


//mongoose.Promise = global.Promise;

app.use(cors());
app.use('/admin', adminRoutes);


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