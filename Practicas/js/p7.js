function eliminarPrimerEnlace() {
    const menu = document.getElementById("menu-peliculas");
    const primerEnlace = menu.firstElementChild;
    if (primerEnlace) {
      menu.removeChild(primerEnlace);
    }
  }
  
  function agregarEnlace() {
    const menu = document.getElementById("menu-peliculas");
    const nuevoEnlace = prompt("Ingresa la URL de la película:");
    const nuevoNombre = prompt("Ingresa el nombre de la película:");
  
    if (nuevoEnlace && nuevoNombre) {
      const nuevoElemento = document.createElement("li");
      const enlace = document.createElement("a");
      enlace.href = nuevoEnlace;
      enlace.textContent = nuevoNombre;
      nuevoElemento.appendChild(enlace);
      menu.appendChild(nuevoElemento);
    }
  }
  
  function toggleMenu() {
    const menu = document.getElementById("menu-peliculas");
    menu.style.display = (menu.style.display === "none" || menu.style.display === "") ? "block" : "none";
  }
  