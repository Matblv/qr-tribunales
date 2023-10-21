const body = document.getElementById("body");
const alerta = document.getElementById("alerta");
const background = document.getElementById("background");
background.style.height = `${screen.height}px`;


alerta.addEventListener("click", () => {
    alerta.classList = "display";
    background.classList = "display";
    body.style.overflow = "auto"
})