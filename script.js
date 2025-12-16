const musica=document.getElementById("musica");
document.getElementById("botaoMusica").onclick=()=>{
    musica.paused?musica.play():musica.pause();
};

// SEÇÕES
function mostrarSecao(id){
    document.querySelectorAll(".secao").forEach(s=>s.classList.remove("ativa"));
    document.getElementById(id).classList.add("ativa");
}

// SLIDESHOW
let slideIndex=0;
const slides=document.querySelectorAll(".slide");

setInterval(()=>{
    slides[slideIndex].classList.remove("active");
    slideIndex=(slideIndex+1)%slides.length;
    slides[slideIndex].classList.add("active");
    if(slides[slideIndex].tagName==="VIDEO") slides[slideIndex].play();
},3000);

// MODAL
document.querySelectorAll(".card").forEach(card=>{
    card.onclick=()=>{
        modal.style.display="block";
        modalTitulo.textContent=card.dataset.title;
        modalImagem.src=card.dataset.image;
        modalDescricao.textContent=card.dataset.desc;
    };
});
fechar.onclick=()=>modal.style.display="none";

// CRONÔMETRO
const inicio=new Date("2024-12-07");
setInterval(()=>{
    const diff=new Date()-inicio;
    dias.textContent=Math.floor(diff/86400000);
    horas.textContent=Math.floor(diff/3600000)%24;
    minutos.textContent=Math.floor(diff/60000)%60;
},1000);

let progresso = 0;
const barra = document.getElementById("barraProgresso");
const porcentagem = document.getElementById("porcentagem");
const boosters = document.getElementById("boosters");
const mensagemFinal = document.getElementById("mensagemFinal");

function criarBooster(texto) {
    const booster = document.createElement("div");
    booster.className = "booster";
    booster.textContent = texto;
    boosters.appendChild(booster);
}

function mandarBeijo() {
    if (progresso >= 100) return;

    progresso += 10;
    if (progresso > 100) progresso = 100;

    barra.style.width = progresso + "%";
    barra.textContent = progresso + "%";
    localStorage.setItem("progressoBeijos", progresso);

    // Beijos subindo
    for (let i = 0; i < 8; i++) {
        const beijo = document.createElement("div");
        beijo.className = "beijo";
        beijo.textContent = "💋";
        beijo.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(beijo);
        setTimeout(() => beijo.remove(), 2000);
    }

    // BOOSTER 50%
    if (progresso === 50) {
        document.getElementById("boosters").innerHTML =
            "💋 Beijo duplo desbloqueado!";
    }

    // META 100% → TELA CHEIA
    if (progresso === 100) {
        const overlay = document.getElementById("overlayMetaAmor");
        overlay.style.display = "flex";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 5000);
    }
}

    criarBeijos(6);

    // BOOSTERS
    if (progresso === 30) {
        criarBooster("💖 Booster de Amor desbloqueado!");
    }

    if (progresso === 60) {
        criarBooster("🔥 Beijo Quente x2!");
    }

    if (progresso === 90) {
        criarBooster("✨ Amor Infinito ativado!");
    }

 if (progresso === 100) {
    mensagemFinal.style.display = "block";
    const overlay = document.getElementById("overlayAmor");
overlay.style.display = "flex";

setTimeout(() => {
    overlay.style.display = "none";
}, 5000); // 5 segundos


    criarBooster("💋💋 BEIJO DUPLO LIBERADO!");
    criarBeijos(20);
}


function criarBeijos(qtd) {
    for (let i = 0; i < qtd; i++) {
        const beijo = document.createElement("div");
        beijo.className = "beijo";
        beijo.textContent = "💋";
        beijo.style.left = Math.random() * 100 + "vw";
        document.body.appendChild(beijo);
        setTimeout(() => beijo.remove(), 2000);
    }
}
const textosWhats = [
  "Namorada online agora 💙",
  "Responde rapidinho ⚡",
  "Chama que eu tô aqui 💕"
];

let t = 0;
setInterval(() => {
  const status = document.querySelector(".whats-status");
  if (status) {
    status.textContent = textosWhats[t];
    t = (t + 1) % textosWhats.length;
  }
}, 3500);


const textoCompleto = `
Amor,

Eu tinha medo de amar, confesso,
achava que sentir era sempre excesso.
Coração fechado, cheio de razão,
até você chegar bagunçando tudo em mim então.

Você apareceu sem pedir licença,
trouxe paz, trouxe luz, trouxe presença.
E sem perceber, sem nem tentar,
me fez vencer o medo que eu tinha de amar.

Não foi escolha, foi acontecer,
era impossível não te querer.
Cada sorriso teu me puxava pra perto,
meu coração batia alto, sem jeito, descoberto.

Você me ajudou quando eu nem sabia pedir,
ficou quando eu pensava em fugir.
Segurou minha mão nos dias mais cinza,
fez da minha dor uma lembrança extinta.

Com você eu aprendi a sentir sem medo,
a me entregar mesmo tremendo por dentro.
Porque amar você é fácil demais,
é tipo respirar, é natural, é paz.

Eu tentei negar, tentei evitar,
mas não dava… eu só sabia te amar.
Era você, sempre foi, desde o começo,
meu destino escrito em forma de desejo.

Se hoje eu sou mais forte, é por nós duas,
por tudo que você foi e ainda é depois.
Você não me salvou como um conto irreal,
você só me amou — e isso foi o essencial.

E se alguém perguntar por que eu sou assim,
eu digo seu nome, sorrio no fim.
Porque amar você não foi decisão,
foi destino, foi sorte, foi coração.
pra sempre  te amarei ao infinito e além, minha eterna paixão.
`;

let indexTexto = 0;
let escrevendo = false;

function abrirLivro() {
    document.getElementById("livroOverlay").style.display = "flex";
    const campoTexto = document.getElementById("textoLivro");
    campoTexto.textContent = "";
    indexTexto = 0;
    escrevendo = true;
    escreverTexto();
}

function fecharLivro() {
    document.getElementById("livroOverlay").style.display = "none";
    escrevendo = false;
}

function escreverTexto() {
    if (!escrevendo) return;

    const campoTexto = document.getElementById("textoLivro");

    if (indexTexto < textoCompleto.length) {
        campoTexto.textContent += textoCompleto.charAt(indexTexto);
        indexTexto++;
        setTimeout(escreverTexto, 60);
    }
}


// ÁREA SECRETA
function verificarSenha() {
    const senha = document.getElementById("senha").value;
    if (senha === "amor") {
        document.getElementById("conteudoSecreto").style.display = "block";
    } else {
        alert("Senha errada 😢");
    }
}



