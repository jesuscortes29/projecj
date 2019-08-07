const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListadosSchema = new Schema({

  id_profesor:[
    {
      type: Schema.Types.ObjectId,
      ref: "Profesores"
    }
  ],
  id_materia:[
    {
      type: Schema.Types.ObjectId,
      ref: "Materias"
    }
  ],
  fecha:Date
});

var Listados = mongoose.model("listados", ListadosSchema);
module.exports = Listados;