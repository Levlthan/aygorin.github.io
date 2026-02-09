const weeklyMessages = [
  "Hoy ",
  "Hola",
  "A",
  "A",
  "S",
  "T",
  "A"
];

// --- NO TOCAR de aquí para abajo ---
function dayIndexLocal() {
  const now = new Date();
  // En España: lunes=0 ... domingo=6 (más intuitivo para “semana”)
  const js = now.getDay(); // domingo=0 ... sábado=6
  return (js + 6) % 7;
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
const msg = weeklyMessages[idx] ?? weeklyMessages[0];

document.querySelector("#date").textContent = formatDateES(new Date());
document.querySelector("#text").textContent = msg;