// Función para sumar dos números
const suma = (num1, num2) => num1 + num2;

// Función para verificar si un número es par
const esPar = (num) => (num % 2 === 0 ? "Es par" : "Es impar");

// Aplicación de .map
const aplicarMap = (arr) => arr.map((el) => el * 2);

// Extraer nombres de objetos
const obtenerNombres = (arr) => arr.map((obj) => obj.nombre);

// Lógica para los botones
document.getElementById("btn-suma").addEventListener("click", () => {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingresa números válidos.");
        return;
    }
    const result = suma(num1, num2);
    document.getElementById("output").textContent = `La suma de ${num1} y ${num2} es ${result}`;
});

document.getElementById("btn-esPar").addEventListener("click", () => {
    const num = parseInt(prompt("Ingresa un número:"));
    if (isNaN(num)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    const result = esPar(num);
    document.getElementById("output").textContent = `¿Es ${num} par? ${result}`;
});

document.getElementById("btn-map").addEventListener("click", () => {
    const input = prompt("Ingresa un arreglo de números separados por comas:");
    if (!input) {
        alert("Por favor, ingresa un arreglo válido.");
        return;
    }
    const arr = input.split(",").map(Number);
    if (arr.some(isNaN)) {
        alert("Todos los elementos deben ser números.");
        return;
    }
    const result = aplicarMap(arr);
    document.getElementById("output").textContent = `Arreglo original: [${arr}] - Resultado con .map(): [${result}]`;
});

document.getElementById("btn-nombres").addEventListener("click", () => {
    const objetos = [
        { nombre: "Juan", edad: 25 },
        { nombre: "Ana", edad: 30 },
        { nombre: "Luis", edad: 20 }
    ];
    const result = obtenerNombres(objetos);
    document.getElementById("output").textContent = `Nombres extraídos: [${result.join(", ")}]`;
});
