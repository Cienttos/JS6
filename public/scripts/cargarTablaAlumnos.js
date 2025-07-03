//Funcion para generar tabla con el contenido de un array en este caso estilada para ALUMNOS
export default function cargarTabla(tabla, array) {
  try {
    tabla.innerHTML = `
      <table class="mx-auto w-full max-w-4xl bg-white shadow-md rounded-xl overflow-hidden animate-fade-in transition-all duration-300">
        <thead class="bg-blue-600 text-white">
          <tr>
            <th class="px-4 py-3 text-left">Nombre</th>
            <th class="px-4 py-3 text-left">Apellido</th>
            <th class="px-4 py-3 text-left">DNI</th>
            <th class="px-4 py-3 text-left">Curso</th>
            <th class="px-4 py-3 text-left">Legajo</th>
          </tr>
        </thead>
        <tbody class="text-gray-800 divide-y divide-gray-200">
          ${array
        .map(
          (p) => `
              <tr class="hover:bg-blue-50 transition-colors duration-200">
                <td class="px-4 py-3">${p.nombre}</td>
                <td class="px-4 py-3">${p.apellido}</td>
                <td class="px-4 py-3">${p.dni}</td>
                <td class="px-4 py-3">${p.curso}</td>
                <td class="px-4 py-3">${p.legajo}</td>
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
