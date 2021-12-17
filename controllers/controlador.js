const conexion = require("../database/db");

exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    conexion.query('INSERT INTO contactos SET ?', {nombre:nombre, apellido:apellido, telefono:telefono}, (error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    })
}

exports.update = (req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const telefono = req.body.telefono;
    conexion.query('UPDATE contactos SET ? WHERE id = ?', [{nombre:nombre, apellido:apellido, telefono:telefono}, id],(error,results)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/')
        }
    }) 
}