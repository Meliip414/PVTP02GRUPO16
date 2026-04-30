const notas = [8, 5, 3, 9, 10, 2, 6, 4, 7, 9];
console.log("Todas las notas:");
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

console.log("Notas aprobadas:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        console.log(notas[i]);
    }
}

console.log("Notas desaprobadas:");
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < 6) {
        console.log(notas[i]);
    }
}

let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}
const promedio = suma / notas.length;
console.log(`Promedio: ${promedio}`);

let aprobadas = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 6) {
        aprobadas++;
    }
}
console.log(`Cantidad de aprobadas: ${aprobadas}`);