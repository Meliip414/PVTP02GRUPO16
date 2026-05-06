// import { servivioMelinaLeaño } from "../services/serviceMelinaLeaño.js";
// import { servicioLujanButron } from "../services/serviceLujanButron.js";
// import { servicioZelayaApazaZoe } from "../services/serviceZelayaApazaZoe.js";
// import { serviceJosefinaRios } from "../services/serviceJosefinaRios.js";
// import { serviceLuisanaBarbaraVillena} from "../services/serviceLuisanaBarbaraVillena.js"

document.addEventListener("DOMContentLoaded", () => {
const boton = document.querySelector("#btn");

boton.addEventListener("click", () => {

    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const lu = document.querySelector("#lu").value;

    alert(`Los datos ingresados son:
Nombre: ${nombre}
Apellido: ${apellido}
Libreta Universitaria: ${lu}`);

});
});