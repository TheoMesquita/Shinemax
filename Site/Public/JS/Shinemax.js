/* Botão Conteudo mover "Esquerda" e "Direita" */

const scroll = document.getElementById("scroll");
function moverEsquerda() {
  scroll.scrollLeft -= 100;
}
function moverDireita() {
  scroll.scrollLeft += 100;
}
const scroll2 = document.getElementById("scroll2");
function moverEsquerda2() {
  scroll2.scrollLeft -= 100;
}
function moverDireita2() {
  scroll2.scrollLeft += 100;
}
const scroll3 = document.getElementById("scroll3");
function moverEsquerda3() {
  scroll3.scrollLeft -= 100;
}
function moverDireita3() {
  scroll3.scrollLeft += 100;
}

/* Gráfico */

var data = {
  labels: [" Gostaram " , " Não gostaram " , " Não Sabem " ],
  datasets: [
    {
      data: [10, 5, 15],
      backgroundColor: ["rgb(0, 0, 255)", "rgb(255, 0, 0)", "rgb(96, 90, 90)"],
      hoverOffset: 4,
    },
  ],
};
const config = {
  type: "doughnut",
  data: data,
  options: {
    plugins: {
      title: {
        display: true,
        text: "Pessoas que gostaram do site",
      },
    },
  },
};
const myChart = new Chart(document.getElementById("avaliacoes"), config);