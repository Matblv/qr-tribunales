const body = document.getElementById("body");
const alerta = document.getElementById("alerta");
const background = document.getElementById("background");
const button = document.getElementById("button");
background.style.height = `${screen.height}px`;


button.addEventListener("click", () => {
    alerta.classList = "display";
    background.classList = "display";
    body.style.overflow = "auto"
})