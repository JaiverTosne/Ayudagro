'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema ({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: [String]
});
module.exports = mongoose.model('Project', ProjectSchema);
// Projects --> Guarda los documentos en la coleccion