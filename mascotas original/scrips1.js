let lista = [
  "./img/descarga (1).jpeg",
  "./img/descarga (2).jpeg",
  "./img/descarga.jpeg",
];

console.log(lista);

const contenedor = document.getElementById("contiener");
const pasoImagen = document.getElementById("imgver");
let posicion = 0;
function cambioImagen() {
  if (posicion == lista.length - 1) {
    posicion = 0;
  } else {
    posicion = posicion + 1;
  }

  pasoImagen.setAttribute("src", lista[posicion]);
}

pasoImagen.addEventListener("click", cambioImagen);
