const express = require('express')
const router = express.Router()
const Sala = require('../model/Sala');
const authorize = require("../middlewares/auth");


router.route('/').get((req, res, next) => {
    Sala.find()
        .then((sala) => {
            if (sala=="") {
                return res.status(404).json('No se encontro ninguna Sala');
            }
            return res.json(sala);
        })
        .catch((error) => {
            next(error)
        })
});


router.route('/:id').get((req, res, next) => {
    const id = req.params.id;
    Sala.findById(id)
        .then(sala => {
            if (!sala) {
                return res.status(404).json('Sala no encontrada');
            }
            return res.json(sala)
        })
        .catch((error) => {
            next(error)
        })
});

//saca todas las salas y horarios de una peli
router.route('/peliculas/:id').get((req, res, next) => {
    const id = req.params.id;
    Sala.find({'idPelicula':id})
        .then(sala => {
            if (!sala) {
                return res.status(404).json('Sala no encontrada');
            }
            return res.json(sala)
        })
        .catch((error) => {
            next(error)
        })
});


router.route('/').post(authorize, (req, res, next) => {

    const newSala = new Sala({
        numeroSala: req.body.numeroSala,
        sesion:req.body.sesion,
        activo:req.body.activo,
        idPelicula:req.body.idPelicula|| []
    });

    newSala.save()
        .then(() => {
            return res.status(201).json(newSala);
        }).catch((error) => {
            next(error);
        });

})

router.route('/:id/pelicula').put(authorize, (req, res, next) => {

    const salaid = req.params.id;
    const peliculaid = req.body.idPelicula;

    Sala.findByIdAndUpdate(
        salaid,
        { $push: { idPelicula: peliculaid } },
         { new: true })
        .then(salactualizado => {
            res.status(200).json(salactualizado);
        })
        .catch(error => {
            next(error);
        });

})

router.route('/:id').put(authorize, (req, res, next) => {

    const salaid = req.params.id;
    const salamodificar = new Sala(req.body);
    salamodificar._id = salaid;
    Sala.findByIdAndUpdate(salaid, salamodificar, { new: true })
        .then(salactualizado => {
            res.status(200).json(salactualizado);
        })
        .catch(error => {
            next(error);
        });

})




router.route('/:id/').delete(authorize, (req, res, next) => {
    const salaid = req.params.id;
    Sala.findByIdAndDelete(salaid)
        .then(() => {
            return res.status(200).json(`Sala con id ${salaid} ha sido eliminada`);
        })
        .catch(error => {
            next(error);
        });
});





module.exports = router;