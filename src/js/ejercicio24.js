import { mostrarSeleccion } from "../js/funciones24.js";

const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.querySelector("#resultado");

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", () => {
        let valor = radios[i].value;
        mostrarSeleccion(valor, resultado);
    });
}