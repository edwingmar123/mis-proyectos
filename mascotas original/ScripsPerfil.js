import { url_mascotas } from "./constants.js";
import { getData } from "./getData.js";
import { deleteData } from "./deleteData.js";
document.addEventListener("DOMContentLoaded", async function () {
  const publiMacotas = await getData(url_mascotas);

  const verPublicacion = document.getElementById("verPublicacion");
  console.log(publiMacotas);

  publiMacotas.forEach((element) => {
    const { descripcion, nombre, url, animal, raza, color } = element;
    const tabla = document.createElement("table");

    tabla.innerHTML = `
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Animal</th>
            <th scope="col">Raza</th>
            <th scope="col">Color</th>
            <th scope="col">Acciones</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${nombre}</td>
            <td>${animal}</td>
            <td>${raza}</td>
            <td>${color}</td>
            <td>
              <button type="button" class="btn btn-primary btnDelete" id="${element.id}">Eliminar</button>
              <button type="button" class="btn btn-primary btnEdit" id="${element.id}">Editar</button>
            </td>
          </tr>
        </tbody>
      </table>
    `;

    const btnDelete = tabla.querySelector(".btnDelete");
    btnDelete.addEventListener("click", (e) => {
      console.log(e.target.id);
      deleteData(url_mascotas, e.target.id);
    });

    const btnEdit = tabla.querySelector(".btnEdit");
    btnEdit.addEventListener("click", (e) => {
      console.log(e.target.id, element);
    });

    verPublicacion.appendChild(tabla);
  });
});
