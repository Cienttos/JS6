import axios from "axios"
//Metodo GET
export async function oDAg(url) {
    try {
        const res = await axios.get(url)
        return res.data
    }
    catch (err) {
        console.log("error: " + err)
    }
}

//Metodo POST
export async function oDAp(url) {
    try {
        const res = await axios.post(url)
        return res.data
    }
    catch (err) {
        console.log("error: " + err)
    }
}