const edades = [19, 18, 21, 30, 22, 33, 26, 29];

let suma = 0;

edades.forEach(edad => {
    console.log (`Edad: ${edad}`);
    suma = edad;
});

let promedio = suma / edades.length;

console.log (`Promedio de edades: ${promedio}`);