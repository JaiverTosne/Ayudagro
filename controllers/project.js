'use strict'
const Project = require('../models/project');
var project = require('../models/project');
var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: "Soy la Home"
        });
    },
    test: function(req, res){
        return res.status(200).send({
            message: "Soy la test"
        });
    },
    // Agregar un Proyecto
    saveProject: function(req, res){
        var project = new Project();

        var params = req.body;

        project.name = params.name;
        project.description = params.description;
        project.category = params.category;
        project.langs = params.langs;
        project.year = params.year;
        project.image = null;

        project.save((err, projectStored) =>{
            if(err) return res.status(500).send({message: "Error al guardar documento"});
            if(projectStored) return res.status(404).send({message: "No se pudo guardar el documento"});
            return res.status(200).send({project:projectStored});
        
        

        });
    },

    getProject: function(req, res){
        var projectId = req.params.id;
        if (projectId==null) return res.status(404).send({message: "No se pudo encontrar el documento"});

        Project.findById(projectId, (err , project) => {
            if(err) return res.status(500).send({message: "Error al retornar los datos"});
            if(!project) return res.status(404).send({message: "No se pudo encontrar el documento"});
            return res.status(200).send({project});
        });
}
module.exports = controller;