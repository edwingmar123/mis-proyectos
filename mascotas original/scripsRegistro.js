/* const save = document.getElementById("envio")
const Arraypersona = JSON.parse(localStorage.getItem("persona")) || [];
envio.addEventListener('submit', function(e){
    e.preventDefault();

const Arraypersona = JSON.parse(localStorage.getItem("persona")) || [];

const empresa = document.getElementById("persona").value
const identity = document.getElementById("identi").value
const number = document.getElementById("security").value
/* let registro =
{
    empresa,identity,number
}
console.log(registro)

let poner = registro.empresa;
let poner1 = registro.identity;
let poner2 = registro.number;
let ponerInfo = (poner + " " + poner1 + " " + poner2)
console.log(ponerInfo) */

/* empresa.textContent = `${ponerInfo}`; */
/* const verificacion = Arraypersona.some (persona => persona.empresa === empresa);

if(!verificacion){
    Arraypersona.push({empresa, identity,number});
    localStorage.setItem("persona",JSON.stringify(Arraypersona));
    alert("ya se encuentra registrado")
    save.reset()
    window.location.href = "./inicio.html"
}else{
    alert("ya exeiste ")
    
    
    
}
localStorage.setItem("persona",JSON.stringify(Arraypersona));
/* descuentoR = registro.identity/registro.identity; */

/* })

function change() {
    document.body.classList.toggle('dark');
} */

import { url_users } from "./constants.js";

import { postData } from "./postData.js";

const envio = document.getElementById("envio");

envio.addEventListener("submit", function (e) {
  e.preventDefault();

  let objmascotas = {
    id: crypto.randomUUID(),
    nombre: document.getElementById("persona").value,
    descripcion: document.getElementById("identi").value,
    clave: document.getElementById("security").value,
  };

  document.location.href = "/inicio.html";
  postData(url_users, objmascotas);
  console.log(objmascotas);
});
