/* Carrossel */
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let vezes = 0;

function Carrossel() {
  vezes++;
  if (vezes > img.length - 1) {
    vezes = 0;
  }

  imgs.style.transform = `translateX(${-vezes * 100}%)`;
  informaçao.style.transform = `translateX(${-vezes * 100}%)`
}
setInterval(Carrossel, 5000);
