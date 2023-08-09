let text = [];
let num = 0;

text.push(
  "Gabriel Poo: Parece que você passou com facilidade do primeiro quarto, não é? "
);
text.push("Yoshi-  Que-Que-Quem é você?");
text.push(
  "Gabriel Poo - Eu sou o Gabriel Progamação orientada a objeto, a pessoa que pode te tirar dessa sala e te dar um 10 em web"
);
text.push("Yoshi- Mas como eu consigo sair da casa e conseguir um 10 em web?");
text.push(
  "Gabriel Poo - Simples, você só tem que passar pelas próximas salas, se conseguir vc sai e tira o seu 10, se não... hahahahahahahaha *risada maléfica*"
);
text.push(
  "Gabriel Poo - ...Você irá ficar eternamente assustado no JOGO MUITO ASSUSTADOR. buuuuhhhhhhhhh"
);
function escrever(index) {
  const caixa = document.querySelector(".dialog-content");
  caixa.innerHTML = `<p>${text[index]} (Clique enter ou espaço para continuar)</p>  `;
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
      caixa.innerHTML = `  <p>Você está preparado??</p>
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
  alert(
    "Você não tem opção. (Isso é uma critica para a vida que te dá uma falsa sensação de liberdade, mas no final das contas o determinismo reina.)"
  );
  window.location.href = "quartoSegundo.html";
}
function cliqueBtnSim() {
  window.location.href = "quartoSegundo.html";
}
