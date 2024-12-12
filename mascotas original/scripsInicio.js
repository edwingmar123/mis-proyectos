import { getData } from "./getData.js";
import { url_users } from "./constants.js";

console.log("ddd");

const save = document.getElementById("envio");

save.addEventListener("submit", async function (e) {
  e.preventDefault();

  const lista = await getData(url_users);

  console.log(lista);

  const email = document.getElementById("persona").value;
  const password = document.getElementById("identi").value;

  if (email === "" || password === "") {
    alert("Por favor, complete todos los campos");
    return;
  }

  const ingresar = lista.find(
    (persona) => persona.nombre === email && persona.clave === password
  );

  console.log(ingresar);
  console.log(email, password);
  if (ingresar) {
    alert("Bienvenido");
    window.location.href = "./perfil.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
