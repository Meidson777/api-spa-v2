'use strict';

var dbConn = require('../../config/Connection');


// idServico	
// statusServico	
// checkIn	
// chekout	
// Cliente_idCliente	
// Procedimento_idProcedimento	
// funcionario_idFuncionarioAuxiliar	
// Funcionario_idFuncionario	

//Funcionario object create

var Servico = function(servico){
    this.statusServico                     = servico.statusServico;
    this.checkIn                           = servico.checkIn;
    this.chekout                           = servico.chekout;
    this.Cliente_idCliente                 = servico.Cliente_idCliente;
    this.Procedimento_idProcedimento       = servico.Procedimento_idProcedimento;
    this.funcionario_idFuncionarioAuxiliar = servico.funcionario_idFuncionarioAuxiliar;
    this.Funcionario_idFuncionario         = servico.Funcionario_idFuncionario;
    this.idServico                         = servico.idServico;
    
      
};

// Lista todos os Serviços
Servico.findAll = function(result){
    dbConn.query('SELECT * FROM servicoprocedimento', function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err); 
        }
        else{
            console.log('Serviços: ', res);
            result(null, res);
        }
    });
};

// Lista Serviço por id
Servico.findById = function (id, result) {
    dbConn.query("SELECT * FROM servicoprocedimento WHERE idServico = ? ", id, function (err, res) {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


// // Create new Servico
Servico.create = function (newService, result) {
    dbConn.query("INSERT INTO servicoprocedimento SET ?", newService, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


// Update Servico for Id
Servico.update = function(id, result){
    dbConn.query("UPDATE servicoprocedimento SET statusServico=? WHERE idServico = ?", [servico.statusServico, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


module.exports= Servico;