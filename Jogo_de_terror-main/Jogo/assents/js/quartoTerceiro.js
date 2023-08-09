let vidas = localStorage.getItem("vidas");
console.log(vidas);
const numVidas = document.querySelector("#numVidas");
numVidas.innerHTML = vidas;
if (vidas <= 0) {
  window.location.href = "gamerOver.html";
}
setInterval(() => {
  let yoshi = document.querySelector("#yoshi");

  const finish = document.querySelector("#finish");
  const caixas = document.querySelectorAll(".red-box, .purple-box");
  for (let j = 0; j < caixas.length; j++) {
    if (isCollide(caixas[j], yoshi)) {
      vidas--;
      localStorage.setItem("vidas", vidas);
      window.location.reload();
    }
  }
  if (isCollide(finish, yoshi)) window.location.href = "quartoQuarto.html";

  function isCollide(a, b) {
    var aRect = a.getBoundingClientRect();
    var bRect = b.getBoundingClientRect();

    return !(
      aRect.top + aRect.height < bRect.top ||
      aRect.top > bRect.top + bRect.height ||
      aRect.left + aRect.width < bRect.left ||
      aRect.left > bRect.left + bRect.width
    );
  }
  /*
Essa função de colisão tirei desse stackoverflow
https://stackoverflow.com/questions/2440377/javascript-collision-detection

*/
}, 400);
