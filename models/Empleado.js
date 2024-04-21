const mongoose = require('mongoose');

// Este modelo que vamos a hace debe ser igual a lo que tenga la BBDD

const empleadoSchema= mongoose.Schema({
nombres: {
    type: String,
    require: true
},
apellidos: {
    type: String,
    require: true
},
cedula: {
    type: Number,
    require: true
},
cargo: {
    type: String,
    require: true
},
sueldo: {
    type: Number,
    require: true
},
sede: {
    type: String,
    require: true
},


},{versionkey:false});

module.exports = mongoose.model('Empleado', empleadoSchema);