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
}
setInterval(Carrossel, 2000);

/* Botão de Pesquisa */

function mostrar(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){

        document.getElementById(el).style.display = 'flex'
        document.getElementById(el).className = 'pesquisa'
    } else {
        document.getElementById(el).style.display = 'none';
    }

}