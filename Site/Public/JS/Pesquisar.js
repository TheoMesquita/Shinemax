/* Botão de Pesquisa */

function mostrar(el) {
  var display = document.getElementById(el).style.display;
  if (display == "none") {
    document.getElementById(el).style.display = "flex";
    document.getElementById(el).className = "pesquisa";
  } else {
    document.getElementById(el).style.display = "none";
  }
}
