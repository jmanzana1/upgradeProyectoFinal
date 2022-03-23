const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const ComprasSchema = new Schema(
    {
      fecha: { type: Date, required: true },
      asientosReservados: { type: String, required: true },
      precio: { type: Number, required: true},
      idPelicula: [{ type: mongoose.Types.ObjectId, ref: 'Pelicula' }],
      SalaSesion: [{ type: mongoose.Types.ObjectId, ref: 'Sala' }],
      localizador:{ type: String, required: true }
    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const compras = mongoose.model('Compras', ComprasSchema);
  module.exports = compras;