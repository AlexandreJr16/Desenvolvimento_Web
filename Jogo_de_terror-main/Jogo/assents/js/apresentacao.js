let text = [];
let num = 0;
let vidas = 3;
localStorage.setItem("vidas", vidas);

text.push("Esse é yoshi");
text.push(
  "Por algum motivo ele acordou em uma casa muito assustadora e precisa da sua ajuda pra sair dela."
);
text.push("Depois de muito andar pelos milhares de quartos da casa...");
text.push("Yoshi está em uma sala com um monte de fantasmas");
function escrever(index) {
  const caixa = document.querySelector(".dialog-content");
  caixa.innerHTML = `<p>${text[index]}... (Clique enter ou espaço para continuar)</p>  `;
}
escrever(num);
document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key == "Enter" || event.keyCode == 32) {
    num++;
    if (num < text.length) {
      escrever(num);
    } else {
      const caixa = document.querySelector(".dialog-content");
      caixa.innerHTML = `  <p>Você pode ajudar ele?</p>
      <div id="lado-lado">
        <button id = "btnSim">Sim</button>
        <button id = "btnNao">Não</button>
      </div>`;
      const btnNao = document.querySelector("#btnNao");
      const btnSim = document.querySelector("#btnSim");
      btnNao.addEventListener("click", cliqueBtnNao);
      btnSim.addEventListener("click", cliqueBtnSim);
    }
  }
});
function cliqueBtnNao() {
  alert("Ah, então beleza. Fique com essa música ai.");
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}
function cliqueBtnSim() {
  window.location.href = "quartoPrimeiro.html";
}
