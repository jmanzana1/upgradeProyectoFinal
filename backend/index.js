const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

// Conexion base de datos
require('./db/db');



const pelicula = require('./handlers/Pelicula')
const compras = require('./handlers/Compras')
const sala = require('./handlers/Sala')
const usaurios = require('./handlers/user')

//configuracion Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
app.use('/static', express.static(__dirname + '/public'));


//Rutas
app.use('/Pelicula', pelicula)
app.use('/Sala', sala)
app.use('/Compras', compras)
app.use('/usuarios', usaurios)



  
app.listen(process.env.PORT || 3001, () => {
      console.log(`Servidor arrancado en el puerto 3001`);
    });


// Express error handling
app.use((req, res, next) => {
  setImmediate(() => {
    console.log("sdsad")
      next(new Error('Something went wrong'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});