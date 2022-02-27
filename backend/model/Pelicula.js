const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const PeliculaSchema = new Schema(
    {
      nombre: { type: String, required: true },
      Descripcion: { type: String, required: true},
      Imagen_Caratula: { type: String, required: true},
      Imagen1: { type: String, required: true},
      Imagen2: { type: String},
      Imagen3: { type: String},
      Genero: { type: String, required: true},
      Duracion: { type: Number, required: true},
      Pais: { type: String, required: true},
      Imdb: { type: Number, required: true},
      Director: { type: String, required: true}
    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const pelicula = mongoose.model('Pelicula', PeliculaSchema);
  module.exports = pelicula;