const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noCount = 0;

// Frases que va diciendo el botón NO (en orden)
const noTexts = [
  "segura",
  "segura segura??",
  "mejor di que sí ",
  "amor porfaaaa ",
  "flacaaaa",
  "no existe el NO "
];

// Escalas iniciales
let yesScale = 1;
let noScale = 1;

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function updateButtons() {
  // YES crece
  yesScale = clamp(yesScale + 0.25, 1, 5);

  // NO se encoge
  noScale = clamp(noScale - 0.12, 0.15, 1);

  yesBtn.style.transform = `scale(${yesScale})`;
  noBtn.style.transform = `scale(${noScale})`;

  // Cambia texto del NO (si se pasa de la lista, repite el último)
  const idx = Math.min(noCount - 1, noTexts.length - 1);
  noBtn.textContent = noTexts[idx];

  // Si NO ya está muy pequeño, lo escondemos (opcional)
  if (noScale <= 0.2) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
    yesBtn.textContent = "YES";
    yesBtn.style.width = "100%";
  }
}

noBtn.addEventListener("click", () => {
  noCount += 1;
  updateButtons();
});

// (Opcional) si quieres que también cuente cuando pase el mouse por NO en PC:
noBtn.addEventListener("mouseenter", () => {
    noCount += 1;
    updateButtons();
});


// Click en YES -> “otra página” (cambia contenido)
yesBtn.addEventListener("click", () => {
  // Cambia el título
  question.textContent = "YAYYYY!!! ";

  // Cambia el gif al que mandaste
  mainImg.src = "https://media1.tenor.com/m/xy4LoWb1_68AAAAC/muah-mua.gif";


  // Opcional: desactivar botones para que no sigan jodiendo
  yesBtn.disabled = true;
  noBtn.disabled = true;

  // Opcional: esconder la fila de botones para que parezca “otra página”
  const btnRow = document.getElementById("btnRow");
  if (btnRow) btnRow.style.display = "none";

  // Opcional: cambia el tip
  const hint = document.querySelector(".hint");
  if (hint) hint.textContent = "Gracias bacan";
});


