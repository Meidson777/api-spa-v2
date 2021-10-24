const express = require('express')
const router = express.Router()
const servicoController =   require('../Controller/Servico.Controller');


// Lista todos os funcionarios
router.get('/', servicoController.findAll);

// Lista um funcionarios por id
router.get('/:id', servicoController.findById);

// Create a new funcionarios
router.post('/', servicoController.create);

// Update a funcionarios with id
router.put('/:id', servicoController.update);


module.exports = router