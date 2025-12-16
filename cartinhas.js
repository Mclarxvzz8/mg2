document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".cartinha").forEach(carta => {
        carta.addEventListener("click", () => {
            carta.classList.toggle("aberta");
            console.log("clicou"); // DEBUG
        });
    });
});

const musica=document.getElementById("musica");
document.getElementById("botaoMusica").onclick=()=>{
    musica.paused?musica.play():musica.pause();
};