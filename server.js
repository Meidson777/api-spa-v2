const express = require('express');
const bodyParser = require('body-parser');

// create express app
  const app = express();

// Setup server port
  const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
  app.use(bodyParser.json());

 //Require books routes
const funcionarioRoutes = require('./src/Routes/Funcionario.Routes')
// using as middleware
  app.use('/funcionario', funcionarioRoutes)



// listen for requests
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  }); 