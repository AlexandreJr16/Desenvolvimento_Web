const songs = document.querySelectorAll(".song");
const imgs = document.querySelectorAll(".imagem");
const bd = document.querySelector(".bd");

function hideAll() {
  for (let j = 0; j < 5; j++) {
    songs[j].classList.add("hide");
  }
}
function select(i) {
  songs[i].classList.remove("hide");
  for (let j = 0; j < 5; j++) {
    let text = `bd${j}`;
    bd.classList.remove(text);
  }
  let text = `bd${i}`;
  bd.classList.add(text);
}
for (let i = 0; i < 5; i++) {
  imgs[i].onclick = () => {
    hideAll();
    select(i);
  };
}
