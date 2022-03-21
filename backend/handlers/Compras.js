const express = require('express')
const router = express.Router()
const Compras = require('../model/Compras');
const authorize = require("../middlewares/auth");


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

router.route('/').get( (req, res, next) => {
    Compras.find()
        .then((compras) => {
            if (compras=="") {
                return res.status(404).json('No se encontro ninguna Compra');
            }
            return res.json(compras);
        })
        .catch((error) => {
            next(error)
        })
});

router.route('/fecha/:date').get( (req, res, next) => {
    const datefind = req.params.date;
    Compras.find({"fecha":new Date(datefind)})
        .then((compras) => {
            if (compras=="") {
                return res.status(404).json('No se encontro ninguna Compra');
            }
            return res.json(compras);
        })
        .catch((error) => {
            next(error)
        })
});

router.route('/asientos/:date/:sala').get( (req, res, next) => {
    const datefind = req.params.date;
    const salaid = req.params.sala;
    Compras.find({"fecha":new Date(datefind),"idSalaSesion":salaid})
        .then((compras) => {
            let listasientos=[]
            for (let compra of compras){
                
                asie=compra.asientosReservados.split(",");
                for (let asi of asie){
                    listasientos.push(asi)
                }
            }
            console.log(listasientos)

        //     objetobutacas=[
        //         {
        //         "fila":1,
        //         "butacas":[
        //         { 'posicion': 1, ocupada: 'libre' },
		// 		{ 'posicion': 2, ocupada: 'libre' },
		// 		{ 'posicion': 3, ocupada: 'libre' },
		// 		{ 'posicion': 4, ocupada: 'libre' },
		// 		{ 'posicion': 5, ocupada: 'libre' },
		// 		{ 'posicion': 6, ocupada: 'libre' },
		// 		{ 'posicion': 7, ocupada: 'libre' },
		// 		{ 'posicion': 8, ocupada: 'libre' },
		// 		{ 'posicion': 9, ocupada: 'libre' },
		// 		{ 'posicion': 10, ocupada: 'libre' },
		// 		{ 'posicion': 11, ocupada: 'libre' },
		// 		{ 'posicion': 12, ocupada: 'libre' },
		// 		{ 'posicion': 13, ocupada: 'libre' },
		// 		{ 'posicion': 14, ocupada: 'libre' },
        //         ]
        //     },
        //     {
        //         "fila":2,
        //         "butacas":[
        //         { 'posicion': 1, ocupada: 'libre' },
		// 		{ 'posicion': 2, ocupada: 'libre' },
		// 		{ 'posicion': 3, ocupada: 'libre' },
		// 		{ 'posicion': 4, ocupada: 'libre' },
		// 		{ 'posicion': 5, ocupada: 'libre' },
		// 		{ 'posicion': 6, ocupada: 'libre' },
		// 		{ 'posicion': 7, ocupada: 'libre' },
		// 		{ 'posicion': 8, ocupada: 'libre' },
		// 		{ 'posicion': 9, ocupada: 'libre' },
		// 		{ 'posicion': 10, ocupada: 'libre' },
		// 		{ 'posicion': 11, ocupada: 'libre' },
		// 		{ 'posicion': 12, ocupada: 'libre' },
		// 		{ 'posicion': 13, ocupada: 'libre' },
		// 		{ 'posicion': 14, ocupada: 'libre' },
        //         ]
        //     },
        //     {
        //         "fila":3,
        //         "butacas":[
        //         { 'posicion': 1, ocupada: 'libre' },
		// 		{ 'posicion': 2, ocupada: 'libre' },
		// 		{ 'posicion': 3, ocupada: 'libre' },
		// 		{ 'posicion': 4, ocupada: 'libre' },
		// 		{ 'posicion': 5, ocupada: 'libre' },
		// 		{ 'posicion': 6, ocupada: 'libre' },
		// 		{ 'posicion': 7, ocupada: 'libre' },
		// 		{ 'posicion': 8, ocupada: 'libre' },
		// 		{ 'posicion': 9, ocupada: 'libre' },
		// 		{ 'posicion': 10, ocupada: 'libre' },
		// 		{ 'posicion': 11, ocupada: 'libre' },
		// 		{ 'posicion': 12, ocupada: 'libre' },
		// 		{ 'posicion': 13, ocupada: 'libre' },
		// 		{ 'posicion': 14, ocupada: 'libre' },
        //         ]
        //     }
        // ]
        // console.log(objetobutacas)


            //creo el json
            objectasiento={}
            arrayasientosfinal=[]
            butacasarray=[]
            obtemp=[]
                fila=1
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf('1_'+z)>-1){
                        obtemp={"posicion":z,"ocupada":"vendida"}
                    }else{
                        obtemp={"posicion":z,"ocupada":"libre"}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)
                console.log(arrayasientosfinal)
                
                //Fila2
                fila=2
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila3
                fila=3
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila4
                fila=4
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila5
                fila=5
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila6
                fila=6
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila7
                fila=7
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)
                
                //Fila8
                fila=8
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila9
                fila=9
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila10
                fila=10
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)


                //Fila11
                fila=11
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<13;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)

                //Fila12
                fila=12
                butacasarray=[]
                objectasiento={}
                objectasiento.fila=fila;
                for (let z=1;z<15;z++){
                    if (listasientos.indexOf(fila+'_'+z)>-1){
                        obtemp={'posicion':z,'ocupada':'vendida'}
                    }else{
                        obtemp={'posicion':z,'ocupada':'libre'}
                    }
                    butacasarray.push(obtemp)
                    //console.log(butacasarray)
                }
                objectasiento.butacas=butacasarray;
                console.log(objectasiento)
                arrayasientosfinal.push(objectasiento)


            console.log(arrayasientosfinal)

            return res.json(arrayasientosfinal);
        })
        .catch((error) => {
            next(error)
        })
});



router.route('/:id').get( (req, res, next) => {
    const id = req.params.id;
    Compras.findById(id)
        .then(compras => {
            if (!compras) {
                return res.status(404).json('Compra no encontrada');
            }
            return res.json(compras)
        })
        .catch((error) => {
            next(error)
        })
});


router.route('/').post((req, res, next) => {

    console.log("Esto es lo que me llega:")
    console.log(req.body)
    const newCompra = new Compras({
        fecha: req.body.fecha,
        asientosReservados: req.body.asientosReservados,
        precio: req.body.precio,
        idPelicula:req.body.idPelicula,
        idSalaSesion:req.body.idSalaSesion,
        localizador:makeid(6)
    });
    console.log("Esto es despues de guardarlo:")
    console.log(newCompra)
    newCompra.fecha instanceof Date;

    console.log("despues de convertir fecha")
    console.log(newCompra)
    newCompra.save()
        .then(() => {
            return res.status(201).json(newCompra);
        }).catch((error) => {
            next(error);
        });

})





module.exports = router;


