let mat1i = 0;
let mat2i = 0;
let mat3i = 0;
let mat4i = 0;
let mat5i = 0;
let mat6i = 0;
let mat7i = 0;

function llenar_datos() {
    mat1i = parseFloat(prompt("Inserta tu calificación para " + horario.mat1 + " ")) || 0;
    mat2i = parseFloat(prompt("Inserta tu calificación para " + horario.mat2 + " ")) || 0;
    mat3i = parseFloat(prompt("Inserta tu calificación para " + horario.mat3 + " ")) || 0;
    mat4i = parseFloat(prompt("Inserta tu calificación para " + horario.mat4 + " ")) || 0;
    mat5i = parseFloat(prompt("Inserta tu calificación para " + horario.mat5 + " ")) || 0;
    mat6i = parseFloat(prompt("Inserta tu calificación para " + horario.mat6 + " ")) || 0;
    mat7i = parseFloat(prompt("Inserta tu calificación para " + horario.mat7 + " ")) || 0;
}

function calcular_prom() {
    let suma = mat1i + mat2i + mat3i + mat4i + mat5i + mat6i + mat7i;
    return suma / 7;
}

let horario = {
    mat1: "Fundamentos de telecomunicación\n",
    mat2: "Arquitectura de Computadoras\n",
    mat3: "Fundamentos de Ingeniería de Software\n",
    mat4: "Sistemas Operativos\n",
    mat5: "Programación Web\n",
    mat6: "Lenguajes y Autómatas\n",
    mat7: "Taller de Bases de Datos\n",
    imprimir: function () {
        return this.mat1 + " " + this.mat2 + " " + this.mat3
            + " " + this.mat4 + " " + this.mat5 + " " + this.mat6 + " " + this.mat7;
    }
};

function mainApp() {
    llenar_datos();
    let respuesta = confirm("¿Deseas calcular tu promedio?");
    if (respuesta) {
        alert("Tu promedio es de: " + calcular_prom().toFixed(2));
    }
}
