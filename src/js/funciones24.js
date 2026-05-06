export const mostrarSeleccion = (valor, elemento) => {
    elemento.textContent = "Seleccionado: " + valor;
    console.log("Seleccionado:", valor);
};