// Se exporta el modelo
const Empleado = require('../models/Empleado');

// funcion agregar Empleado

exports.agregarEmpleados = async(req, res) => {
    
    try {
        let empleados = new Empleado(req.body)
        await empleados.save();
        res.send(empleados);

    } catch (error) {
       console.log(error)
       res.status(500).send('Hubo un error al agregar un Empleado') 
    }

} 

// Mostrar Empleados

exports.mostrarEmpleados = async (req, res) => {
    try {
        
        const empleados = await Empleado.find();
        res.json(empleados);
        
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al agregar un Empleado') 
    }

}


// Mostrar un Empleado

exports.mostrarUnEmpleado = async(req, res) => {
    try {
        let empleados = await Empleado.findById(req.params.id)
        if(!empleados){
            res.status(404).json({msg:"No se encuentra el Empleado con ese ID"})

        }
        res.send(empleados);

    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error al buscar un Empleado en la BBDD') 
    }
}


// Funcion para eliminar Empleados

exports.eliminarEmpleados = async(req,res) => {

    try {

        let empleados = await Empleado.findById(req.params.id);
        if(!empleados){
            res.status(404).json({msg:"El Empleado no existe"});
            return
        }
        
        await Empleado.findOneAndDelete({_id: req.params.id});
        res.json({msg:"El empleado fue Eliminado de la BBDD"});


    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al Eliminar el Empleado en la BBDD") 
    }
}


// Agregar Empleados

exports.modificarEmpleado = async(req,res) => {

    try {
        let empleado = await Empleado.findByIdAndUpdate(req.params.id, req.body,{new: true});
            if(!empleado){
                return res.status(404).send('Empleado no encontrado');
            }
            res.json(empleado)
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Hubo un error al moficar el Empledo en la BBDD") 
    }
}