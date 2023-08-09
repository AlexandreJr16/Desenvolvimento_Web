const campo = document.querySelector("#senha");
const btn = document.querySelector("#btn");

function password() {
  var senha = " ";
  let letras =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%&?";
  const numMax = 16;
  console.log(letras.length);
  let numAleatorio = 0;
  for (let i = 0; i < 16; i++) {
    do {
      numAleatorio = Math.random();
      numAleatorio *= 100;
      numAleatorio = Math.ceil(numAleatorio);
    } while (numAleatorio > 68);
    if (i == 0) {
      senha = letras[numAleatorio];
    } else senha += letras[numAleatorio];
  }
  campo.value = senha;
}
btn.onclick = () => {
  password();
};
