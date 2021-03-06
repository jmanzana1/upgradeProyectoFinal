const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes

// imgFicha: 220x330
// imgCarousel: 1200x600

const PeliculaSchema = new Schema(
    {
      nombre: { type: String, required: true },
      descripcion: { type: String, required: true},
      imgCarousel: { type: String, required: true},
      imgFicha: { type: String, required: true},
      trailer: { type: String},
      genero: { type: String, required: true},
      duracion: { type: Number, required: true},
      pais: { type: String, required: true},
      imdb: { type: Number, required: true},
      director: { type: String, required: true},
      actores: { type: String, required: true},
      carousel: { type: Boolean, required: true},
      estreno: { type: Boolean, required: true},
      proximo: { type: Boolean, required: true}

    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const pelicula = mongoose.model('Pelicula', PeliculaSchema);
  module.exports = pelicula;