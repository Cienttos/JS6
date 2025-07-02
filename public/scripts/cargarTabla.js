export default function cargarTabla(tabla, array) {
    try {
        tabla.innerHTML = array.map(p => `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.email}</td>
      </tr>
    `).join("");
    } catch (err) {
        console.log("Error: " + err);
    }
}
