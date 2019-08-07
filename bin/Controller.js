const mongoose = require("mongoose");
const Acudientes=require("./models/Acudientes");
const Profesores=require("./models/Profesores");
const Materias=require("./models/Materias");
const Listados=require("./models/Listados");
const Asistencias=require("./models/Asistencias");
const Estudiantes=require("./models/Estudiantes");



class Controller{
constructor(){
    this.connect();
}
async connect(){
try{
    await mongoose.connect(
        "mongodb+srv://deyes:a1b2c3d4@cluster0-yg4ca.mongodb.net/trabajo?retryWrites=true&w=majority",
        {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos")
    }catch(e){
    console.error(e)
        }
    }
 getAcudientes(res){
            Acudientes.find({}, (err, acudientes)=>{
                if(err) throw err;
                res.send(acudientes);

            })
        }
 getAsistencias(res){
            Asistencias.find({}, (err, asistencias)=>{
                if(err) throw err;
                res.send(asistencias);

            })
        }
 getProfesores(res){
            Profesores.find({}, (err, profesores)=>{
                if(err) throw err;
                res.send(profesores);

            })
        }

getAsistenciasPorEstudiantes(res){
    Asistencias.find({}).
    populate('Estudiantes').
    exec( (err, asistencias)=>{
        if(err) throw err;
        res.send(asistencias);
    })
}
getAsistenciasPor(res){
    Asistencias.find({fecha:25022019}).
    populate({model:"Estudiantes",path:"_id",select:"nombre apellido _idacudiente"}).
    exec( (err, asistencias)=>{
        if(err) throw err;
        res.send(Asistencias);
    })
}

setEstudiantes(estudiantes, res) {
    Estudiantes.create(estudiantes, function(err, newEstudiantes) {
        if (err) throw err;
        res.send({ status: 200, nE: newEstudiantes});
    });
}


getEstudiantes(res){
            Estudiantes.find({}, (err, estudiantes)=>{
                if(err) throw err;

                res.send(estudiantes);

            })
        }
getEstudiante(id, res){
    Estudiantes.find({_id:id}, (err, estudiante)=>{
        if(err) throw err;
        res.send({Estudiante: estudiante})
    });
}
getMaterias(res){
            Materias.find({}, (err, materias)=>{
                if(err) throw err;
                res.send(materias);

            })
        }

getListados(res){
            Listados.find({}, (err, listados)=>{
                if(err) throw err;
                res.send(listados);

            })
        }

updateEstudiante(estudiante,res){
let {nombre, apellido } = estudiante;

    Estudiante.updateOne(
        { _id: id },
        { $set : { nombre: nombre, apellido: apellido }
        }),

    .then(rawResponse => {
        res.send({ message: "Estudiante updated", raw: rawResponse
    })
    .catch(err => {
        if (err) throw err ;
    });
},
exports.controller=new Controller();