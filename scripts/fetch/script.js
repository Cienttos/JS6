//Metodo GET
export async function oDFg(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    catch (err) {
        console.log("error: " + err)
    }
}

//Metodo POST
export async function oDFp(url) {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: "{}"
        });
        const data = await res.json();
        return res;
    }
    catch (err) {
        console.log("error: " + err)
    }
}