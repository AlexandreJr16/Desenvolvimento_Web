let yoshiX = 0;
let yoshiY = 0;

document.onkeydown = (e) => {
  let quarto = document.querySelector("#quarto");
  let yoshi = document.querySelector("#yoshi");
  let bordaQuarto = quarto.getBoundingClientRect();
  let bordaYoshi = yoshi.getBoundingClientRect();

  if (e.keyCode == 37) {
    if (yoshiX - 10 > 0) yoshiX -= 10;
    else yoshiX = 0;
    yoshi.style.transform = `translate(${yoshiX}px, ${yoshiY}px)`;
  } else if (e.keyCode == 38) {
    if (yoshiY - 10 > 0) yoshiY -= 10;
    else yoshiY = 0;
    yoshi.style.transform = `translate(${yoshiX}px, ${yoshiY}px)`;
  } else if (e.keyCode == 39) {
    if (yoshiX + 10 < bordaQuarto.width - bordaYoshi.width) yoshiX += 10;
    else yoshiX = bordaQuarto.width - bordaYoshi.width;
    yoshi.style.transform = `translate(${yoshiX}px, ${yoshiY}px)`;
  } else if (e.keyCode == 40) {
    if (yoshiY + 10 < bordaQuarto.height - bordaYoshi.height) yoshiY += 10;
    else yoshiY = bordaQuarto.height - bordaYoshi.height;
    yoshi.style.transform = `translate(${yoshiX}px, ${yoshiY}px)`;
  }
};
