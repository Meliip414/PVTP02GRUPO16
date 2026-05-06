let texto = document.getElementById("Texto");
let resultado = document.getElementById("resultado");

texto.addEventListener("input", () => {
    resultado.textContent = `Texto ingresado: ${texto.value}`;
    
    if (texto.value.length > 20) {
        resultado.style.backgroundColor = "#f79880fa";
    } else {
        resultado.style.backgroundColor = "rgba(255, 255, 255, 0.96)";
    }
});
