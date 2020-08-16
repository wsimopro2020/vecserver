var express = require('express');

var router = express.Router();

let mongoose = require('./../config/conexion');

let esp32 = require('./../models/esp32');


router.get("/agregar/:reg",(req,res,next)=>
{
    //Agregaremos un registro a nuestra base de datos
    console.log("Agregamos un registro a nuestar base de datos");
    let elemento = new esp32({ fecha: "hoy" ,trama : req.params.reg});
    console.log("Se esta guardando info en la db:\n",elemento);
    
    elemento.save(function(err) {
        if (err) 
        {
            console.log("Error al guardar elementos\n");
            return console.error(err);
        }
       
          res.redirect('/');
      });});





router.get("/monitor",(req,res,next)=>
{


    res.render('monitor', { title: 'Sitema de monitoreo remoto' });
});



      router.get('/listar',(req,res,next)=>{
        esp32.find({},(err,datos)=>
        {
          if(err) throw err;
           res.render('list',{datos:datos})
        });
      });
      

      module.exports = router;

        

