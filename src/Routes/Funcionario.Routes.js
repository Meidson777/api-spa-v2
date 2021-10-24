const express = require('express')
const router = express.Router()
const funcionarioController =   require('../Controller/Funcionario.Controller');


// Lista todos os funcionarios
router.get('/', funcionarioController.findAll);

// Lista um funcionarios por id
router.get('/:id', funcionarioController.findById);

// Create a new funcionarios
router.post('/', funcionarioController.create);

// Update a funcionarios with id
router.put('/:id', funcionarioController.update);

// Delete a funcionarios with id
router.delete('/:id', funcionarioController.delete);

router.post('/login', funcionarioController.login);

// login vai get funcionarios por id
router.get('/login/:email/:senha', funcionarioController.LoginGet);

module.exports = router