const cambiarEstiloBtn = document.getElementById("cambiarEstilo");
const body = document.body;
const container = document.querySelector(".container");
const titulo = document.querySelector("h1");
const secciones = document.querySelectorAll("section");
const articulos = document.querySelectorAll("article");
const aside = document.querySelector("aside");

cambiarEstiloBtn.addEventListener("click", () => {
  // Cambiar color de fondo del body
  body.style.backgroundColor = "#4A4A72";

  // Cambiar color de fondo y estilo del contenedor principal
  container.style.backgroundColor = "#F5D0C5";
  container.style.border = "2px solid #FFB6C1";
  container.style.borderRadius = "10px";
  container.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)";

  // Cambiar color y estilo del título
  titulo.style.color = "#fff";
  titulo.style.textTransform = "uppercase";

  // Cambiar color y estilo de las secciones
  secciones.forEach((section) => {
    section.style.backgroundColor = "#E6B8C6";
    section.style.padding = "20px";
    section.style.borderRadius = "5px";
    section.style.marginBottom = "10px";
  });

  // Cambiar color y estilo de los artículos
  articulos.forEach((article) => {
    article.style.backgroundColor = "#FFF0F5";
    article.style.border = "1px solid #D8BFD8";
    article.style.padding = "15px";
    article.style.borderRadius = "5px";
  });

  // Cambiar color y estilo del aside
  aside.style.backgroundColor = "#FFE4E1";
  aside.style.padding = "15px";
  aside.style.borderRadius = "5px";

  // Cambiar estilo del botón
  cambiarEstiloBtn.style.backgroundColor = "#FF6F61";
  cambiarEstiloBtn.style.color = "#fff";
  cambiarEstiloBtn.style.border = "none";
  cambiarEstiloBtn.style.borderRadius = "5px";
  cambiarEstiloBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
});
