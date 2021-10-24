'use strict';

const Servico = require('../Model/Servico.Model');

exports.findAll = function(req,res){

    Servico.findAll(function(err, servico){
        console.log('controller');
        if(err)
            res.send(err);
            
            console.log('controller', servico);
            res.send(servico);
    });
};

exports.findById = function(req, res) {

    Servico.findById(req.params.id, function(err, servico) {
        if (err)
            res.send(err);
            res.json(servico);
    });
};


exports.create = function(req, res) {
    const newService = new Servico(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }
    else{
        Servico.create(newService, function(err, servico) {
            if (err)
                res.send(err);
                res.json({error:false,message:"Funcionario added successfully!",data:servico});
        });
    }
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Servico.update(req.params.id, new Servico(req.body), function(err, servico) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Funcionario successfully updated' });
        });
    }
};