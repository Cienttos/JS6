//Funcion para obtener datos mediante fetch vanilla
export async function obtenerDatosFetch(url) {
    try {
        const res = await fetch(url)
        const datos = res.json()
        return datos
    }
    catch (err) {
        console.log("Error: " + err)
    }
}

//Funcion para enviar datos mediante fetch vanilla
export async function enviarDatosFetch(url, datos) {
    try {
        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        const res = req.json()
        return res
    }
    catch (err) {
        console.log("Error: " + err)
    }
}