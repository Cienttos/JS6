//Funcion para generar tabla con el contenido de un array en este caso estilada para Usuarios
export default function cargarTabla(tabla, array) {
  try {
    tabla.innerHTML = `
      <table class="min-w-full table-auto border-collapse shadow-md rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
        <thead>
          <tr class="bg-blue-600 text-white transition-colors duration-300">
            <th class="px-4 py-3 text-left">Nombre</th>
            <th class="px-4 py-3 text-left">Email</th>
          </tr>
        </thead>
        <tbody class="bg-white text-gray-700">
          ${array
        .map(
          (p, i) => `
            <tr class="${i % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-blue-100 transition-colors duration-200">
              <td class="px-4 py-3 border-t border-gray-200">${p.nombre}</td>
              <td class="px-4 py-3 border-t border-gray-200">${p.email}</td>
            </tr>
          `
        )
        .join("")}
        </tbody>
      </table>
    `
  } catch (err) {
    console.log("Error: " + err)
  }
}
