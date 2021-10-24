'use strict';

const Code = require('../Model/Code.Model');

exports.findAll = function(req,res){
    Code.findAll(function(err, code){
        console.log('controller');
        if(err)
            res.send(err);
            
            console.log('controller', code);
            res.send(code);
    });
};

exports.findById = function(req, res) {

    Code.findById(req.params.id, function(err, code) {
        if (err)
            res.send(err);
            res.json(code);
            // console.log(code);
    });
};



exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Code.update(req.params.id, new Code(req.body), function(err, servico) {
            if (err)
                res.send(err);
                res.json({ error:false, message: 'Funcionario successfully updated' });
        });
    }
};

exports.GetServicoCliente = function(req,res) {
    Code.GetServicoCliente(req.params.id, function(err,code){
        if (err)
            res.send(err);
            res.json(code);
    });
};
