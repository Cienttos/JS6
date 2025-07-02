
//Funcion para obtener datos mediante fetch axios
export async function obtenerDatosAxios(url) {
    try {
        const res = await axios.get(url)
        const datos = res.data
        return datos
    }
    catch (err) {
        console.log("Error" + err)
    }
}

//Funcion para enviar datos mediante fetch axios
export async function enviarDatosAxios(url, datos) {
    try {
        const res = await axios.post(
            url,
            {
                nombre: datos.nombre,
                email: datos.email
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return res.data
    } catch (err) {
        console.error("Error:", err);
    }
}