const express = require('express');
const conexion = require('./database/db');
const router = express.Router()

//RUTA PARA MOSTRAR REGISTROS
router.get('/', (req,res)=>{
    
    conexion.query('SELECT * FROM contactos', (error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index', {results:results})
        }
    })
})

//RUTA PARA CREAR REGISTROS
router.get('/create',(req,res)=>{
    res.render('create')
})

//RUTA PARA EDITAR REGISTROS
router.get('/edit/:id', (req,res)=>{
    const id = req.params.id;
    conexion.query('SELECT * FROM contactos WHERE id=?',[id], (error,results)=>{
        if(error){
            throw error;
        }else{
            res.render('edit', {user:results[0]})
        }
    })
})

//RUTA PARA EDITAR REGISTROS
router.get('/delete/:id',(req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM contactos WHERE id = ?', [id], ( error,results)=>{
        if (error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
})
const crud = require('./controllers/controlador')
router.post('/save', crud.save)
router.post('/update', crud.update)


module.exports = router;