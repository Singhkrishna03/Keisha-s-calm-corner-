const affirmations = [
  "You are strong and capable.",
  "You deserve peace and joy.",
  "You are enough, just as you are.",
  "You bring happiness wherever you go.",
  "You are doing great!"
];
function showAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById("affirmation-text").textContent = random;
}
document.querySelectorAll(".task-checkbox").forEach(cb => {
  cb.addEventListener("change", () => {
    if (cb.checked && window.confetti) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  });
});
const canvas = document.getElementById("colorCanvas");
if (canvas) {
  const ctx = canvas.getContext("2d");
  let painting = false;
  canvas.addEventListener("mousedown", () => painting = true);
  canvas.addEventListener("mouseup", () => painting = false);
  canvas.addEventListener("mousemove", draw);
  function draw(e) {
    if (!painting) return;
    ctx.fillStyle = "#ff69b4";
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 5, 0, Math.PI * 2);
    ctx.fill();
  }
}
