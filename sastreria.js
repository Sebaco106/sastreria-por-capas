/*const DatosSastreria = require('../Capa Datos/DatosSastreria');
const NegocioSastreria = require('../Capa negocios/NegocioSastreria');
const InterfazUsuario = require('./InterfazUsuario');

// Crear instancia de Express
const express = require('express');  // Agregamos esta línea
const bodyParser = require('body-parser');  // Agregamos esta línea
const app = express();

// Configuración de middleware para manejar datos en formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Crear instancias
const datosSastreria = new DatosSastreria();
const negocioSastreria = new NegocioSastreria(datosSastreria);
const interfazUsuario = new InterfazUsuario(negocioSastreria);

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la Sastrería!');
});

// Ruta para registrar una orden
app.post('/registrarOrden', (req, res) => {
  const tipoTerno = req.body.tipoTerno;
  const color = req.body.color;
  const talla = req.body.talla;
  const precioTotal = parseFloat(req.body.precioTotal);

  interfazUsuario.registrarOrden(tipoTerno, color, talla, precioTotal);

  // Enviar una respuesta al cliente
  res.status(200).send('Orden registrada con éxito.');
});

// Ruta para mostrar todas las órdenes
app.get('/mostrarOrdenes', (req, res) => {
  const ordenes = interfazUsuario.negocioSastreria.obtenerOrdenes();

  // Enviar una respuesta al cliente con las órdenes en formato JSON
  res.status(200).json(ordenes);
});

// Iniciar el servidor en el puerto 3030
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor Sastrería escuchando en http://localhost:${PORT}`);
});*/

const DatosSastreria = require('../Capa Datos/DatosSastreria');
const NegocioSastreria = require('../Capa negocios/NegocioSastreria');
const InterfazUsuario = require('./InterfazUsuario');

// Crear instancia de Express
const express = require('express');  // Agregamos esta línea
const bodyParser = require('body-parser');  // Agregamos esta línea
const app = express();

// Configuración de middleware para manejar datos en formato JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Crear instancias (corregido)
const datosSastreria = new DatosSastreria();
const negocioSastreria = new NegocioSastreria(datosSastreria);
const interfazUsuario = new InterfazUsuario(negocioSastreria);

// Ruta para la página principal
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la Sastrería!');
});

// Ruta para registrar una orden
app.post('/registrarOrden', (req, res) => {
  const tipoTerno = req.body.tipoTerno;
  const color = req.body.color;
  const talla = req.body.talla;
  const precioTotal = parseFloat(req.body.precioTotal);

  interfazUsuario.registrarOrden(tipoTerno, color, talla, precioTotal);

  // Enviar una respuesta al cliente
  res.status(200).send('Orden registrada con éxito.');
});

// Ruta para mostrar todas las órdenes
app.get('/mostrarOrdenes', (req, res) => {
  const ordenes = interfazUsuario.negocioSastreria.obtenerOrdenes();

  // Enviar una respuesta al cliente con las órdenes en formato JSON
  res.status(200).json(ordenes);
});

// Iniciar el servidor en el puerto 3030
const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor Sastrería escuchando en http://localhost:${PORT}`);
});

  
