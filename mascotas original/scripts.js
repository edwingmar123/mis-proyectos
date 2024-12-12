import { url_mascotas } from "./constants.js";

import { postData } from "./postData.js";

const mascotasForm = document.getElementById("mascotasForm");

mascotasForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let objmascotas = {
    id: crypto.randomUUID(),
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    url: document.getElementById("url").value,
    animal: document.getElementById("animal").value,
    raza: document.getElementById("raza").value,
    color: document.getElementById("color").value,
  };

  postData(url_mascotas, objmascotas);
  console.log(objmascotas);
});
