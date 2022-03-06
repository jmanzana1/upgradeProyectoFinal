const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const SalaSchema = new Schema(
    {
      numeroSala: { type: Number, required: true },
      sesion: { type: String, required: true},
      activo: { type: Boolean, required: true},
      idPelicula: [{ type: mongoose.Types.ObjectId, ref: 'pelicula' }]
    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const sala = mongoose.model('Sala', SalaSchema);
  module.exports = sala;