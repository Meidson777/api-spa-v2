'use strict';
var sha1 = require('sha1');

var dbConn = require('../../config/Connection');



// nomeFuncionario
// cpfFuncionario
// emailFuncionario
// telefoneFuncionario
// rua
// bairro
// numCasa
// cep
// cidade
// estado
// senha
// tipoUser
// idFuncionario


//Funcionario object create

var Funcionario = function(funcionario){
    this.nomeFuncionario         = funcionario.nomeFuncionario;
    this.cpfFuncionario          = funcionario.cpfFuncionario;
    this.emailFuncionario        = funcionario.emailFuncionario;
    this.telefoneFuncionario     = funcionario.telefoneFuncionario;
    this.rua                     = funcionario.rua;
    this.bairro                  = funcionario.bairro;
    this.numCasa                 = funcionario.numCasa;
    this.cep                     = funcionario.cep;
    this.cidade                  = funcionario.cidade;
    this.estado                  = funcionario.estado;
    this.senha                   = funcionario.senha;
    this.tipoUser                = funcionario.tipoUser;
    this.idFuncionario           = funcionario.idFuncionario;
    
      
};

// Lista todos os Funcionario
Funcionario.findAll = function(result){
    dbConn.query('SELECT * FROM funcionario', function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err); 
        }
        else{
            console.log('funcionarios: ', res);
            result(null, res);
        }
    });
};

// Lista Funcionario por id
Funcionario.findById = function (id, result) {
    dbConn.query("SELECT * FROM funcionario WHERE idFuncionario = ? ", id, function (err, res) {
        if(err) {
            console.log("Error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


// // Create new Funcionario
Funcionario.create = function (newFuncionario, result) {
    dbConn.query("INSERT INTO funcionario SET UPPER(?)", newFuncionario, function (err, res) {
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


// Update Funcionario for Id
Funcionario.update = function(id, result){
    dbConn.query("UPDATE funcionario SET emailFuncionario=?, senha=? WHERE idFuncionario = ?", [funcionario.emailFuncionario, funcionario.senha, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

// Delete Funcionario for ID
Funcionario.delete = function(id, result){
    dbConn.query("DELETE FROM funcionario WHERE idFuncionario = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Funcionario.login = function(email, senha, result){

    console.log(email);
    var hash = sha1(senha);
    console.log(hash);

     dbConn.query("SELECT * FROM funcionario WHERE emailFuncionario = ? AND senha = ?", [email, hash], function (err, res) {

        // verifica se tem erros
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            if(res != 0 ){
                result(null, res);
            }else{
                console.log("Error: Usuario ou senha incorretos ");
                result(err, null);
            }
        }


    });
  
};



module.exports= Funcionario;