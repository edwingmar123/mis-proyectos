import { url_mascotas } from "./constants.js";
import { getData } from "./getData.js";
const menu = document.getElementById("menu");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  menu.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  menu.classList.remove("visible");
});

document.addEventListener("DOMContentLoaded", async function () {
  const lista = await getData(url_mascotas);

  console.log(lista);

  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = "";

  lista.forEach((element) => {
    const { descripcion, nombre, url, animal, raza, color } = element;
    const ver = document.createElement("div");

    console.log(element);

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

  const modal = document.getElementById("exampleModal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalBody = modal.querySelector(".modal-body");

  contenedor.addEventListener("click", function (e) {
    if (e.target.classList.contains("show-description")) {
      const index = e.target.getAttribute("data-index");
      const selecionMacota = lista[index];

      modalTitle.textContent = selecionMacota.nombre;
      modalBody.textContent = selecionMacota.descripcion;
    }
  });
});
