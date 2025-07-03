import express from "express"
import { oDAg, oDAp } from "./scripts/axios/script.js"
import { oDFg, oDFp } from "./scripts/fetch/script.js"
import cargarPersona from "./scripts/cargarPersona.js"
import cargarPersonas from "./scripts/cargarPersonas.js"
import Alumno from "./classAlumno.js"

//Inicializamos variables y constantes
const app = express()
const port = 3000
const urlApiPublica = "https://jsonplaceholder.typicode.com/users"
let personasPrivadas = [
    cargarPersona("EmilSo", "TaVAarez@yahoo.com"),
    cargarPersona("TomáAs", "RodRígueEz@gmail.com"),
    cargarPersona("Alberto", "LóPez@yahoo.com"),
    cargarPersona("IgnaCio", "GuZmán@hotmail.com"),
    cargarPersona("QuiNto", "LázarEz@gmail.com"),
    cargarPersona("AnToNio", "ReSaTe@yahoo.com"),
    cargarPersona("EsTeBan", "HerNán@gmail.com"),
    cargarPersona("HeRnan", "SiLas@yahoo.com"),
    cargarPersona("SiNa", "CháTiz@gmail.com"),
    cargarPersona("GaBrieL", "PeRézToRres@hotmail.com")
]

let alumnos = [
    new Alumno("Juan", "Pérez", "12345678", "3A", "0001"),
    new Alumno("María", "Gómez", "23456789", "3A", "0002"),
    new Alumno("Lucía", "Martínez", "34567890", "3B", "0003"),
    new Alumno("Pedro", "Sánchez", "45678901", "4A", "0004"),
    new Alumno("Ana", "López", "56789012", "4B", "0005")
]

//Middlewares
app.use(express.json())
app.use(express.static("public"))

//Inicializamos en servidor 
app.listen(port, () => {
    console.log("http://localhost:3000/")
})

//Obtenemos los datos de la API Publica mediante axios y los cargamos en nuestro array de objetos
let listaAxios = await oDAg(urlApiPublica)
let listaPersonasAxios = await cargarPersonas(listaAxios)

//Obtenemos los datos de la API Publica mediante fetch vanilla y los cargamos en nuestro array de objetos
let listaFetch = await oDFg(urlApiPublica)
let listaPersonasFetch = await cargarPersonas(listaFetch)

//enviar datos con fetch y axios de la api publica
app.get("/api/publica/fetch/obtener/personas", (req, res) => {
    try {
        res.send(listaPersonasFetch)

    }
    catch (err) {
        console.log("Error: " + err)
    }
})
app.get("/api/publica/axios/obtener/personas", (req, res) => {
    try {
        res.send(listaPersonasAxios)
    }
    catch (err) {
        console.log("Error: " + err)
    }
})


//obtiene datos y los guarda en nuestra lista de personas privadas
app.post("/api/privada/enviar/personas", (req, res) => {
    try {
        const data = req.body
        const persona = cargarPersona(data.nombre, data.email)
        personasPrivadas.push(persona)
        res.status(200).json({ mensaje: "Persona recibida correctamente" })
    }
    catch (err) {
        console.log("Error: " + err)
        res.status(500).json({ error: "Error interno del servidor" })
    }
})

//envia los datos del array de objetos de personas
app.get("/api/privada/obtener/personas", (req, res) => {
    try {
        res.send(personasPrivadas)
    }
    catch (err) {
        console.log(err)
    }
})

//envia los datos del array de objetos de alumnos
app.get("/api/alumnos", (req, res) => {
    try {
        res.send(alumnos)

    }
    catch (err) {
        console.log("Error: " + err)
    }
})
