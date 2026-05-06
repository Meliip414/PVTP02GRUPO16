import { servicioCambiarTexto } from '../services/service19.js';
document.addEventListener('DOMContentLoaded', () => {
    
    const parrafo = document.querySelector('#miParrafo');
    const boton = document.querySelector('#btn-cambiar');

    boton.addEventListener('click', () => {
        servicioCambiarTexto(parrafo);
        console.log("Se ha ejecutado el cambio de texto correctamente.");
    });
});