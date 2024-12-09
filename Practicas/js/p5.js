frutifantastico();
promediando();
numerando();

function frutifantastico() {
    let frutas = [];
    let n = prompt("¿Cuantas frutas quiere agregar?");
    for (let i = 0; i < n; i++) {
        frutas[i] = prompt("Nombre de la fruta");
    }
    for (let i = 0; i < n; i++) {
        console.log(frutas[i]);
    }
}

function promediando() {
    let calificaciones = [0];
    let sum = 0;
    let n = parseFloat(prompt("¿Cuántas materias tienes?"));
    for (let i = 0; i < n; i++) {
        calificaciones[i] = parseFloat(prompt("Calificación de la materia " + (i + 1) + ":"));
        sum += calificaciones[i];
    }
    console.log("Tu calificación es de: " + sum / n);
    alert("Tu calificación es de: " + sum / n);
}

function numerando() {
    let numeros = [1, 2, 3, 4];
    let sum = 0;
    let n = parseFloat(prompt("¿Cuántos números deseas agregar?"));
    for (let i = 0; i < n; i++) {
        numeros.push(parseFloat(prompt("Ingresa el número " + (i + 1) + ":")));
    }
    for (let i = 0; i < numeros.length; i++) {
        sum += numeros[i];
    }
    console.log("Suma de números: " + sum);
    alert("Suma de números: " + sum);
}
