const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const SalaSchema = new Schema(
    {
      numeroSala: { type: Number, required: true },
      Sesion: { type: String, required: true},
      Activo: { type: Boolean, required: true},
      Id_Pelicula: [{ type: mongoose.Types.ObjectId, ref: 'Pelicula' }],
    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const sala = mongoose.model('Sala', SalaSchema);
  module.exports = sala;