// 🔹 Frases de la semana (se van acumulando día a día)
const weeklyMessages = [
  "Hoy",
  "Hola",
  "A",
  "A",
  "S",
  "T",
  "A"
];

//  Fecha y hora 
const since = "2025-02-16T23:35:00"; // YYYY-MM-DDTHH:MM:SS


/***********************
 * FRASE DIARIA ACUMULADA
 ***********************/
function dayIndexLocal() {
  const now = new Date();
  const js = now.getDay(); // domingo=0 ... sábado=6
  return (js + 6) % 7; // lunes=0 ... domingo=6
}

function formatDateES(d) {
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

const idx = dayIndexLocal();
const msg = weeklyMessages.slice(0, idx + 1).join(" ");

document.querySelector("#date").textContent = formatDateES(new Date());
document.querySelector("#text").textContent = msg;


/***********************
 * CONTADOR COMPLETO (año, mes, día, hora, minuto, segundo)
 ***********************/
function renderMiniCounterFull() {
  const start = new Date(since);
  const now = new Date();

  let y = now.getFullYear() - start.getFullYear();
  let m = now.getMonth() - start.getMonth();
  let d = now.getDate() - start.getDate();
  let h = now.getHours() - start.getHours();
  let min = now.getMinutes() - start.getMinutes();
  let s = now.getSeconds() - start.getSeconds();

  if (s < 0) { s += 60; min--; }
  if (min < 0) { min += 60; h--; }
  if (h < 0) { h += 24; d--; }
  if (d < 0) {
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    d += prevMonthDays;
    m--;
  }
  if (m < 0) { m += 12; y--; }

  const el = document.querySelector("#miniCounter");
  if (el) {
    el.textContent = `· ${y}a ${m}m ${d}d ${h}h ${min}min ${s}s`;
  }
}

renderMiniCounterFull();
setInterval(renderMiniCounterFull, 1000);
