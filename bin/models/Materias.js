const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MateriasSchema = new Schema({
  nombre: String,
  in_horaria: Number,

});

var Materias = mongoose.model("Materias", MateriasSchema);
module.exports = Materias;