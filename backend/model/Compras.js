const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Creamos el esquema de personajes
const ComprasSchema = new Schema(
    {
      Fecha: { type: Date, required: true },
      Asientos_Reservados: { type: String, required: true },
      Precio: { type: Number, required: true},
      Id_Pelicula: [{ type: mongoose.Types.ObjectId, ref: 'Pelicula' }],
      Id_SalaSession: [{ type: mongoose.Types.ObjectId, ref: 'Sala' }]
    },
    {
      timestamps: true,
    }
  );
  
  // Creamos y exportamos el modelo Movies
  const compras = mongoose.model('Compras', ComprasSchema);
  module.exports = compras;