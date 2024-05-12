 const express = require ('express');
 const conectarBD = require('../config/db');
 const cors = require('cors');

 // configuración express y puerto
 const app = express();
 const port = 5000;


 conectarBD();
app.use(cors());
app.use(express.json());

 // Aqui van las rutas de los modulos
 app.use('/api/clientes', require('../routes/RoutesCliente'));
 app.use('/api/empleados', require('../routes/RoutesEmpleado'));

// Enlazamos nuestra conexion a base de datos



 // se prueba sta ruta que va  tener el navegador
 app.listen(port, () => console.log( 'El servidor se encuentra conectado - mongodb -: http://localhost:5000', port));

 app.get('/',(req,res) =>{

    res.send("Bienvenido, el servidor esta configurado")

 }); // final

 
 