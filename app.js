// 🔹 Frases de la semana (se van acumulando día a día)
const weeklyMessages = [
  "Hoy te toca un dia duro y largo preciosa, seguro que tu puedes. Animo!!! Te quiero, ayer se me paso milperdones"
];

// 🔹 Fecha y hora de inicio (hora local)
const since = "2025-02-16T23:35:00"; // YYYY-MM-DDTHH:MM:SS

/***********************
 * UTILIDADES
 ***********************/
function dayIndexLocal() {
  const now = new Date();
  const js = now.getDay();       // domingo=0 ... sábado=6
  return (js + 6) % 7;           // lunes=0 ... domingo=6
}

function formatDateES(d) {
  return d.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

/***********************
 * FRASE DIARIA ACUMULADA
 ***********************/
function renderText() {
  const idx = dayIndexLocal();
  const msg = weeklyMessages.slice(0, idx + 1).join(" ");

  const dateEl = document.getElementById("date");
  const textEl = document.getElementById("text");

  if (dateEl) dateEl.textContent = formatDateES(new Date());
  if (textEl) textEl.textContent = msg;
}

/***********************
 * CONTADOR COMPLETO (año, mes, día, hora, minuto, segundo)
 ***********************/
function renderCounter() {
  const start = new Date(since);
  const now = new Date();

  const el = document.getElementById("miniCounter");
  if (!el) return;

  // Si la fecha es futura, muestra ceros
  if (now < start) {
    el.textContent = "· 0a 0m 0d 0h 0min 0s";
    return;
  }

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

  el.textContent = `· ${y}a ${m}m ${d}d ${h}h ${min}min ${s}s`;
}

/***********************
 * ARRANQUE
 ***********************/
document.addEventListener("DOMContentLoaded", () => {
  renderText();
  renderCounter();

  setInterval(renderCounter, 1000); // contador en tiempo real
  setInterval(renderText, 60000);   // refresca fecha/frase cada minuto
});












