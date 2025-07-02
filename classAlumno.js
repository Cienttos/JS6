export default class Alumno{
    constructor(nombre, apellido, dni, curso, legajo){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.curso = curso
        this.legajo = legajo
    }
    mostrarDatos(){
        try{
            console.log("/ Nombre: "+this.nombre+" - Apellido: "+this.apellido+" - Dni: "+this.dni+" - Curso: "+this.curso+" - Legajo: "+this.legajo+" /")
        }
        catch(err){
            console.log("Error: "+err)
        }
    }
}