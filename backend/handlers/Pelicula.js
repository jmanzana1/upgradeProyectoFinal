const express = require('express')
const router = express.Router()
const Pelicula = require('../model/Pelicula');
const authorize = require("../middlewares/auth");
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
const upload = multer({ storage: storage })






router.route('/').get((req, res, next) => {
    Pelicula.find()
        .then((pelicula) => {
            if (pelicula=="") {
                return res.status(404).json('No se encontro ninguna Pelicula');
            }
            return res.json(pelicula);
        })
        .catch((error) => {
            next(error)
        })
});

router.route('/carousel').get((req, res, next) => {
    Pelicula.find({'carousel':true})
        .then((pelicula) => {
            if (pelicula=="") {
                return res.status(404).json('No se encontro ninguna Pelicula');
            }
            return res.json(pelicula);
        })
        .catch((error) => {
            next(error)
        })
});

router.route('/estreno').get((req, res, next) => {
    Pelicula.find({'estreno':true})
        .then((pelicula) => {
            if (pelicula=="") {
                return res.status(404).json('No se encontro ninguna Pelicula');
            }
            return res.json(pelicula);
        })
        .catch((error) => {
            next(error)
        })
});


router.route('/:id').get((req, res, next) => {
    const id = req.params.id;
    Pelicula.findById(id)
        .then(pelicula => {
            if (!pelicula) {
                return res.status(404).json('Pelicula no encontrada');
            }
            return res.json(pelicula)
        })
        .catch((error) => {
            next(error)
        })
});

const cpUpload = upload.fields([{ name: 'imgCarousel' }, { name: 'imgFicha' }, { name: 'trailer' }])

router.route('/testhtml').post(cpUpload,(req, res, next) => {
    console.log(req.body.nspeakers)

})


router.route('/').post(cpUpload, (req, res, next) => {

    const newPelicula = new Pelicula({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imgCarousel: req.body.imgCarousel,
        imgFicha: req.body.imgFicha,
        trailer: req.body.trailer,
        genero: req.body.genero,
        duracion: req.body.duracion,
        pais: req.body.pais,
        imdb: req.body.imdb,
        director: req.body.director,
        actores: req.body.actores,
        carousel: req.body.carousel,
        estreno: req.body.estreno,
        proximo: req.body.proximo,
    });
    console.log("Post Pelicula");
    console.log(newPelicula);
    newPelicula.save()
        .then(() => {
            return res.status(201).json(newPelicula);
        }).catch((error) => {
            next(error);
        });

})

router.route('/:id').put(authorize, (req, res, next) => {

    const peliculaid = req.params.id;
    const peliculamodificar = new Pelicula(req.body);
    peliculamodificar._id = peliculaid;
    Pelicula.findByIdAndUpdate(peliculaid, peliculamodificar, { new: true })
        .then(pelactualizado => {
            res.status(200).json(pelactualizado);
        })
        .catch(error => {
            next(error);
        });

})




router.route('/:id/').delete(authorize, (req, res, next) => {
    const peliculaid = req.params.id;
    Pelicula.findByIdAndDelete(peliculaid)
        .then(() => {
            return res.status(200).json(`Pelicula con id ${peliculaid} ha sido eliminada`);
        })
        .catch(error => {
            next(error);
        });
});





module.exports = router;