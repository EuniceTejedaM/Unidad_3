const cambiarEstiloBtn = document.getElementById("cambiarEstilo");
const body = document.body;
const container = document.querySelector(".container");
const titulo = document.querySelector("h1");

cambiarEstiloBtn.addEventListener("click", () => {
  // Cambiar color de fondo del body
  body.style.backgroundColor = "#333";

  // Cambiar color de fondo del contenedor
  container.style.backgroundColor = "#f9f9f9";

  // Cambiar color del texto del título
  titulo.style.color = "#fff";

  // Cambiar color del botón
  cambiarEstiloBtn.style.backgroundColor = "#e74c3c";

  // Alternar entre los estilos del contenedor
  container.classList.toggle("nuevo-estilo");
});