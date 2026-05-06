import { actualizarTexto } from "../services/serviceejercicio22.js";

const input = document.querySelector("#entrada");
const salida = document.querySelector("#salida");

input.addEventListener("input", () => {
    actualizarTexto(input.value, salida);
});