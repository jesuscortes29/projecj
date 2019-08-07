const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AcudientesSchema = new Schema({
  nombre: String,
  nombre2: String,
  apellido: String,
  apellido2:String,
  telefono: Number,

});

var Acudientes = mongoose.model("Acudientes", AcudientesSchema);
module.exports = Acudientes;