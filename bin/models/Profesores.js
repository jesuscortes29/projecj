const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfesoresSchema = new Schema({
  nombre: String,
  apellido: String,
  telefono: Number,

});

var Profesores = mongoose.model("Profesores", ProfesoresSchema);
module.exports = Profesores;