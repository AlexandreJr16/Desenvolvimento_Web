let text = [];
let num = 0;

text.push(
  "Bowser: Quem é você? Você tambem é um prisioneiro do Mestre dos Magos, Gabriel Poo?"
);
text.push(
  "Yoshi: Eu sou o Yoshi, estou há um tempo tentando sair dessa casa, mas parece que ela não tem fim."
);
text.push(
  "Yoshi:  Eu conheci esse tal de mestre dos magos, mas tenho que seguir para achar a acahr a saída, ainda bem que ele explicou todo o caminho"
);
text.push(
  "Bowser: Eu tambem estou tentando sair daqui, aliás meu nome é Bowser."
);
text.push(
  "Yoshi: Seria um prazer te conhecer em outras situações, mas você parece ser um cara legal"
);
text.push(
  "Bowser: Obrigado, mas então. Posso tentar sair desse lugar com você?"
);
text.push("Yoshi: Claro, Vamos!!!");
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
      window.location.href = "quartoTerceiro.html";
    }
  }
});
