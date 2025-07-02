export default function cargarTabla(tabla, array) {
    try {
        tabla.innerHTML = array.map(p => `
      <tr>
        <td>${p.nombre}</td>
        <td>${p.apellido}</td>
        <td>${p.dni}</td>
        <td>${p.curso}</td>
        <td>${p.legajo}</td>
      </tr>
    `).join("");
    } catch (err) {
        console.log("Error: " + err);
    }
}
