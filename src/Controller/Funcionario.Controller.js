'use strict';

const Funcionario = require('../Model/Funcionario.Model');

exports.findAll = function(req,res){

    Funcionario.findAll(function(err, funcionario){
        console.log('controller');
        if(err)
            res.send(err);
            
            console.log('controller', funcionario);
            res.send(funcionario);
    });
};

exports.findById = function(req, res) {

    Funcionario.findById(req.params.id, function(err, funcionario) {
        if (err)
            res.send(err);
            res.json(funcionario);
    });
};


exports.create = function(req, res) {
    const newFuncionario = new Funcionario(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }
    else{
        Funcionario.create(newFuncionario, function(err, funcionario) {
            if (err)
                res.send(err);
                res.json({error:false,message:"Funcionario added successfully!",data:funcionario});
        });
    }
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Funcionario.update(req.params.id, new Funcionario(req.body), function(err, funcionario) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Funcionario successfully updated' });
        });
    }
};

exports.delete = function(req, res) {
    Funcionario.delete( req.params.id, function(err, funcionario) {
    if (err)
        res.send(err);
        res.json({ error:false, message: 'Funcionario successfully deleted' });
    });
};


exports.login = function(req, res){

    Funcionario.login(req.query.email, req.query.senha, function(err, funcionario) {
        if (err)
            res.send(err);
            res.json(funcionario);
    });
};

exports.LoginGet = function(req, res) {

    Funcionario.LoginGet(req.params.email,req.params.senha, function(err, funcionario) {
        if (err)
            res.send(err);
            res.json(funcionario);
    });
};