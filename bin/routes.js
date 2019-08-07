const express = require("express");
const app = express();
const {controller}= require("./Controller")
const bodyParser= require("body-parser")
app.use(bodyParser.json());

app.post("/estudiantes", function(req, res) {
    let { estudiantes } = req.body;
    controller.setEstudiantes(estudiantes, res);
});

app.get("/", (req,res )=>{
    res.send("Toma de Asistencia");
})
app.get("/materias", (req,res )=>{
    controller.getMaterias(res);
})

app.get("/profesores", (req,res )=>{
    controller.getProfesores(res);
})

app.get("/asistencias", (req,res )=>{
 controller.getAsistencias(res);
})

app.get("/listados", (req,res )=>{
        controller.getListados(res);
})


app.get("/acudientes", (req,res )=>{
/*let acudientes=[
    {nombre:"mario",apellido:"perez",telefono:"3205214875"},
 ]

res.send(acudientes)*/
controller.getAcudientes(res);
})

app.get("/estudiantes", (req,res )=>{
/*let estudiantes=[{nombre:"genesis",apellido:"canterp",tipoid:"ti",curso:"5",id_acudientes:0001},

                {nombre:"angelica",apellido:"romero",tipoid:"ti",curso:"4",id_acudientes:0002},
 ]*/
 controller.getEstudiantes(res);
});
//Traer a un usuario
app.get("/estudiantes/:id", function(req,res){
let{id}=req.params;
controller.getEstudiante(id, res);
});
app.get("/asistencias/:inasistencias",(req,res )=>{
    let inasistencias = req.params.inasistencias;
    console.log(inasistencias);
    controller.getAsistencias(res)
})

app.get("/asistencias/:fecha/:inasistencias",(req,res )=>{
    let inasistencias = req.params.inasistencias;
    console.log(inasistencias);
    res.send("ok2");
})

//actualizar a un usuario
app.put("/estudiantes/:id", function(req, res) {
 let estudiantes = req.body.estudiantes;
    estudiantes.id=req.params.id;
    console.log(params);
    controller.updateEstudiante(estudiante,res);
});
exports.app = app;