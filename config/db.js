const mongoose = require('mongoose');
require('dotenv').config();

// funcion para hacer la conexión

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then (()=> console.log("Conexion establecida con MongoDB..."))
    .catch((err) => console.error(err));
}
module.exports = conectarBD;