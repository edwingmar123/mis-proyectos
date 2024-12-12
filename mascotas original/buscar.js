import { url_mascotas } from "./constants.js";
import { getData } from "./getData.js";

const search = document.getElementById("btnbuscar");

search.addEventListener("click", async function () {
  const buscar = document.getElementById("buscador").value;

  const lista = await getData(url_mascotas);

  const listaFiltrada = lista.filter((mascota) => {
    if (mascota.nombre.toLowerCase().includes(buscar.toLowerCase())) {
      return mascota;
    }

    if (mascota.raza.toLowerCase().includes(buscar.toLowerCase())) {
      return mascota;
    }

    if (mascota.color.toLowerCase().includes(buscar.toLowerCase())) {
      return mascota;
    }
  });

  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  listaFiltrada.forEach((element) => {
    const { descripcion, nombre, url, animal, raza, color } = element;
    const ver = document.createElement("div");
    ver.innerHTML = `
        <div class="post row p-3">

         <img src="./img/Ellipse 4.png" class="rounded-circle col-3" width="50" height="50">

         <div class="col-7 ">
            <span class="fw-bold">${nombre}</span>
            <br>
            <span class="fw-lighter fs-6">pet star chop</span>
         </div>

         <i class="bi bi-heart col-1"></i>

         <div class="col-8 parallelogram mt-3">
            <img src="${url}" class="parallelogram-img" >
         </div>

         <div class="col-4">
            <button type="button" class="btn btn-danger btn-sm mb-2">${animal}</button>
            <button type="button" class="btn btn-primary btn-sm mb-2">${raza}</button>
            <button type="button" class="btn btn-warning btn-sm mb-2">${color}</button>

         </div>

      </div>
        `;
    contenedor.appendChild(ver);
  });
});
