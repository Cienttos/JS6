import cargarPersona from "./cargarPersona.js"

//funcion para cargar un array con personas
export default async function cargarPersonas(array) {
    try {
        const personas = await Promise.all(
            array.map(e => cargarPersona(e.name, e.email))
        )
        return personas
    }
    catch (err) {
        console.log("Error: " + err)
    }
}
