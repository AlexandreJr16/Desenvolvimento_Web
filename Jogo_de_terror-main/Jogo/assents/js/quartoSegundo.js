let text = [];
let num = 0;
let vidas = 3;
localStorage.setItem("vidas", vidas);

text.push("Aparentemente você tem companhia");
text.push(
  "Um monstro MUITO assustador está ali, você pode fugir ou falar com ele"
);

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
      caixa.innerHTML = `  <p>Você irá conversar com ele?</p>
        <div id="lado-lado">
          <button id = "btnSim">Sim</button>
          <button id = "btnNao">Não</button>
        </div>`;
      const btnNao = document.querySelector("#btnNao");
      const btnSim = document.querySelector("#btnSim");
      btnNao.addEventListener("click", cliqueBtnNao);
      btnSim.addEventListener("click", cliqueBtnSim);
      caixa.classList.add("sumir");
    }
  }
});
function cliqueBtnNao() {
  localStorage.setItem("amigoMonstro", false);
  window.location.href = "quartoTerceiro.html";
  alert("Você fugiu com sucesso");
}
function cliqueBtnSim() {
  localStorage.setItem("amigoMonstro", true);
  window.location.href = "AmigoMonstro.html";
}
