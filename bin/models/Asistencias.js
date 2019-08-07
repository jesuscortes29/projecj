const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AsistenciasSchema = new Schema({
  asistencia: Number,
  inasistencias: Number,
  fecha: Date,

  id_Estudiantes:[
    {
      type: Schema.Types.ObjectId,
      ref: "Estudiantes"
    }
  ]
});

var Asistencias = mongoose.model("Asistencias", AsistenciasSchema);
module.exports = Asistencias;