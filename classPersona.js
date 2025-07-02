export default class Persona {
    constructor(nombre, email) {
        this.nombre = nombre
        this.email = email
    }

    mostrarDatos() {
        try {
            console.log("/ Nombre: " + this.nombre + " - Email: " + this.email + " /")
        }
        catch (err) {
            console.log("error: " + err)
        }
    }
}