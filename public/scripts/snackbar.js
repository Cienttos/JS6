//Funcion para generar y mostrar notificaciones
export default function mostrarSnackbar(tipo, mensaje) {
    try {
        let backgroundColor

        switch (tipo) {
            case "success":
                backgroundColor = "#22c55e"
                break
            case "error":
                backgroundColor = "#ef4444"
                break
            case "info":
                backgroundColor = "#3b82f6"
                break
            case "warning":
                backgroundColor = "#f59e0b"
                break
            default:
                backgroundColor = "#6b7280"
        }

        Toastify({
            text: mensaje,
            duration: 1500,
            gravity: "bottom",
            position: "center",
            backgroundColor: backgroundColor,
            stopOnFocus: true,
        }).showToast()
    }
    catch (err) {
        console.log("Error: " + err)
    }
}
