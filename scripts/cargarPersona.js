import Persona from "../classPersona.js"

export default function cargarPersonas(nombre, email) {
    try {
        const persona = new Persona(nombre, email)
        return persona
    }
    catch (err) {
        console.log("Error:" + err)
    }
}