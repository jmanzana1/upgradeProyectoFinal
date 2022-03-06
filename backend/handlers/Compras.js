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
            if (compras=="") {
                return res.status(404).json('No se encontro ninguna Compra');
            }
            let listasientos=""
            for (let compra of compras){
                
                listasientos=listasientos+compra.asientosReservados+",";
            }
            listasientos=listasientos.slice(0,-1);
            console.log(listasientos)
            return res.json({
                "asientos":listasientos
            });
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


router.route('/').post(authorize, (req, res, next) => {

    const newCompra = new Compras({
        fecha: req.body.fecha,
        asientosReservados: req.body.asientosReservados,
        precio: req.body.precio,
        idPelicula:req.body.idPelicula,
        idSalaSesion:req.body.idSalaSesion,
        localizador:makeid(6)
    });
    newCompra.fecha instanceof Date;

    newCompra.save()
        .then(() => {
            return res.status(201).json(newCompra);
        }).catch((error) => {
            next(error);
        });

})





module.exports = router;


