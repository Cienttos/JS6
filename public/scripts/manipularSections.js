//funcion para controlar el nav para mostrar y ocultar sections con los botones
export default function manipularSections(botones, sections) {
    try {
        botones.forEach((boton, i) => {
            boton.addEventListener("click", () => {
                sections.forEach(section => {
                    section.style.display = "none"
                })
                sections[i].style.display = "block"
            })
        })
    }
    catch (err) {
        console.log("Error: " + err)
    }
}