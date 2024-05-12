const express = require('express');
const router = express.Router();
const EmpleadoController = require('../controllers/EmpleadoController');

// EStas son las rutas del CRUD
router.post('/', EmpleadoController.agregarEmpleados);
router.get('/', EmpleadoController.mostrarEmpleados);
router.get('/:id', EmpleadoController.mostrarUnEmpleado);
router.delete('/:id', EmpleadoController.eliminarEmpleados);
router.put('/:id', EmpleadoController.modificarEmpleado);
//router.put('/:id', EmpleadoController.actualizarEmpleado);
//router.put('/:id', EmpleadoController.ActualizarEmpleadoS);

module.exports = router;