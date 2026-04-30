const nombres = ["Lujan", "Luisana", "Melina", "Zoe", "Josefina", "Julieta"];

let nombreMasLargo = "";

nombres.forEach(nombre => {
    console.log(`Nombre: ${nombre}`);
    if (nombre.length > nombreMasLargo.length) {
        nombreMasLargo = nombre;
    }
});

console.log(`El nombre más largo es: ${nombreMasLargo}`);