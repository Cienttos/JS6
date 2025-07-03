import { obtenerDatosAxios, enviarDatosAxios } from "./scripts/axios/script.js" //importamos las funciones de axios
import { obtenerDatosFetch, enviarDatosFetch } from "./scripts/fetch/script.js" //importamos las funciones de fetch vanilla
import cargarTabla from "./scripts/cargarTabla.js"
import cargarTablaAlumnos from "./scripts/cargarTablaAlumnos.js"
import manipularSections from "./scripts/manipularSections.js"
import mostrarSnackbar from "./scripts/snackbar.js"


//tomamos los elementos del html
const botones = [
    document.getElementById("bp1"),
    document.getElementById("bp2"),
    document.getElementById("bp3"),
    document.getElementById("bp4")
]

const sections = [
    document.getElementById("s1"),
    document.getElementById("s2"),
    document.getElementById("s3"),
    document.getElementById("s4")
]

const tbeP1 = document.getElementById("tbeP1")
const formP2 = document.getElementById("form")
const tbeP3 = document.getElementById("tbeP3")
const filter = document.getElementById("filter")
const tbeP4 = document.getElementById("tbeP4")

//Funciones para mostrar los sections segun el boton
manipularSections(botones, sections)

//Obtiene los datos publicos mediante funciones de axios y los carga en una tabla
let usuariosPublicos = []
usuariosPublicos = await obtenerDatosAxios("/api/publica/fetch/obtener/personas")
cargarTabla(tbeP1, usuariosPublicos)

//Obtiene los datos privados mediante funciones de axios y los carga en una tabla
let usuariosPrivados = []
usuariosPrivados = await obtenerDatosAxios("/api/privada/obtener/personas")
cargarTabla(tbeP3, usuariosPrivados)

//Obtiene los datos de los alumnos mediante fetch y los carga en una tabla
let alumnos = []
alumnos = await obtenerDatosFetch("/api/alumnos")
cargarTablaAlumnos(tbeP4, alumnos)

//evento del formulario que llama a la funcion para enviar datos al servidor
formP2.addEventListener("submit", async (e) => {
    try {
        e.preventDefault()
        const nombreInput = document.getElementById("nombre")
        const emailInput = document.getElementById("email")
        await enviarDatosAxios("/api/privada/enviar/personas", { nombre: nombreInput.value, email: emailInput.value })
        mostrarSnackbar("success", "Datos enviados con exito")
        nombreInput.value = ""
        emailInput.value = ""

        //Obtiene los datos privados mediante funciones de axios y los carga en una tabla
        usuariosPrivados = await obtenerDatosAxios("/api/privada/obtener/personas")
        cargarTabla(tbeP3, usuariosPrivados)

    } catch (err) {
        console.log("Error: " + err)
        mostrarSnackbar("error", "Error al enviar los datos")
    }
})

//Evento para obtener los datos y filtrarlos en pantalla
filter.addEventListener("input", async () => {
    try {
        const texto = filter.value.toLowerCase()

        const filtrados = usuariosPrivados.filter(p =>
            p.nombre.toLowerCase().includes(texto) ||
            p.email.toLowerCase().includes(texto)
        )

        cargarTabla(tbeP3, filtrados)
    }
    catch (err) {
        console.log("Error" + err)
    }
})
