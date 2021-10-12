import mongoose from "mongoose";
const UsuarioAplicacionSchema = new mongoose.Schema({
    nombre: { type: String},
    propietario: { type: String},
    telefono: { type: String},
    fecha: { type: Date, default: Date.now},
    hora: { type: String},
    sintoma: { type: String},
})
export default mongoose.model('UsuarioAplicacion', UsuarioAplicacionSchema);

// TABLAS => collection
// CAMPOS => property
// REGISTROS => Docments