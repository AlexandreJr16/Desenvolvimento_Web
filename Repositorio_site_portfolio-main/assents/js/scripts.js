// Eu tô usando esse js pra abrir e fechar o menu
const btn_menu = document.querySelector("#btn-click");
const menu = document.querySelector("#menu");
let a = true;
function mostrar() {
  if (!a) {
    console.log("teste");
    menu.classList.add("invisivel");
    a = true;
  } else {
    a = false;
    menu.classList.remove("invisivel");
  }
}
btn_menu.addEventListener("click", () => {
  mostrar();
});
