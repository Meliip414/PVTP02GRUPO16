const pais = document.getElementById("pais");
const capital = document.getElementById("capital");

pais.addEventListener("change", () => {
    switch (pais.value) {
        case "Argentina":
            capital.value = "C.A.B.A.";
            break;
        case "Brasil":
            capital.value = "Brasilia";
            break;
        case "Canadá":
            capital.value = "Ottawa";
            break;
        case "Chile":
            capital.value = "Santiago";
            break;
        case "Perú":
            capital.value = "Lima";
            break;
        case "Colombia":
            capital.value = "Bogotá";
            break;
        default:
            capital.value = "";
            break;
    }
});

capital.addEventListener("change", () => {
    switch (capital.value) {
        case "C.A.B.A.":
            pais.value = "Argentina";
            break;
        case "Brasilia":
            pais.value = "Brasil";
            break;
        case "Ottawa":
            pais.value = "Canadá";
            break;
        case "Santiago":
            pais.value = "Chile";
            break;
        case "Lima":
            pais.value = "Perú";
            break;
        case "Bogotá":
            pais.value = "Colombia";
            break;
        default:
            pais.value = "";
            break;
    }
});