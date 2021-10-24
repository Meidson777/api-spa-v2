const express = require('express')
const router = express.Router()
const codeController =   require('../Controller/Code.Controller');

router.get('/', codeController.findAll);

// Lista um funcionarios por id
router.get('/:id', codeController.findById);

// Update a funcionarios with id
router.put('/:id', codeController.update);

// Update a funcionarios with id
router.get('/servicoCliente/:id', codeController.GetServicoCliente);


module.exports = router