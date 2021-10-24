'use strict';

var dbConn = require('../../config/Connection');

// idQrCode	
// code 	
// Code_idCliente	
//Code object create

var Code = function(code){
    this.idQrCode       = code.idQrCode                   
    this.code           = code.code            
    this.Code_idCliente = code.Code_idCliente              
    
      
};

Code.findAll = function(result){
    dbConn.query("SELECT * FROM qrcode", function (err, res) {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

// Lista Serviço por id
Code.findById = function (id, result) {
    dbConn.query("SELECT * FROM qrcode WHERE idQrCode = ? ", id, function (err, res) {
        
            result(null, res);
        
    });
};

// Update Servico for Id
Code.update = function(code, result){
    dbConn.query("UPDATE qrcode SET Code_idCliente = ? WHERE code = ?", [code.idQrCode, code], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Code.GetServicoCliente = function(id, result){
    dbConn.query("SELECT*FROM servicoprocedimento INNER JOIN procedimento ON servicoprocedimento.Procedimento_idProcedimento = procedimento.idProcedimento INNER JOIN cliente ON servicoprocedimento.Cliente_idCliente = cliente.idCliente WHERE Cliente_idCliente = ? AND statusServico = 'Em Andamento'", id, function (err, res) {
    // dbConn.query("SELECT * FROM servicoprocedimento WHERE Cliente_idCliente = ? ", id, function (err, res) {    
        result(null, res);
});
}


module.exports= Code;