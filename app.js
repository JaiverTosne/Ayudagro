'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar Archivos de Rutas
var project_routes = require('./routers/project');
// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

//Rutas
app.use('/api', project_routes)

//Exportar
module.exports = app;