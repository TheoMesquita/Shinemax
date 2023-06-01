/* Carrossel */
var imgs = document.getElementById("img");
var img = document.querySelectorAll("#img img");
var titulo = document.getElementById("titulo");
var texto = document.getElementById("texto")
var buttom = document.getElementById("button")

var vezes = -1;

function Carrossel() {
  vezes++;
  if (vezes > img.length - 1) {
    vezes = 0;
  }
  if (vezes == 0) {
    titulo.innerHTML = `Homem de Ferro`
    texto.innerHTML = `
    Tony Stark é um industrial bilionário, que também é um brilhante inventor. 
    Ao ser sequestrado ele é obrigado por terroristas a construir uma arma devastadora mas, 
    ao invés disto, constrói uma armadura de alta tecnologia que permite que fuja de seu cativeiro.`
    buttom.innerHTML = `
    <a href="">
    <img src="Img/icones/play.png" height="20px" width="20px" />
    Assistir
    </a>`
  } else if (vezes == 1) {
    titulo.innerHTML = `Harry Potter`
    texto.innerHTML = `
    Harry, é um bruxo, sabe criar poções mágicas, 
    voar em vassouras e consegue até ficar invisível. Por outro, é um menino normal,
    um pouco tímido, companheiro, tem medos, expectativas e às vezes fica furioso. 
    E tem preocupações parecidas com as das crianças comuns, como a nota de uma prova difícil.`
    buttom.innerHTML = `
    <a href="">
    <img src="Img/icones/play.png" height="20px" width="20px" />
    Assistir
    </a>`
  } else if (vezes == 2) {
    titulo.innerHTML = `Naruto`
    texto.innerHTML = `
    Naruto Uzumaki é apresentado como um jovem rapaz louro, 
    cabelos arrepiados e olhos azuis. Ele frequentemente veste uma jaqueta laranja. 
    Após a sua graduação ninja ele começa a usar um protetor de testa que denota a sua 
    posição como um ninja da Vila Oculta da Folha.`
    buttom.innerHTML = `
    <a href="">
    <img src="Img/icones/play.png" height="20px" width="20px" />
    Assistir
    </a>`
  } else if (vezes == 3) {
    titulo.innerHTML = `Tron O Legado`
    texto.innerHTML = `
    Sam Flynn, o filho de 27 anos de Kevin Flynn, procura por informações que o levem até seu pai, 
    mas quando Sam menos espera, 
    ele se vê dentro do mesmo mundo de ferozes programas 
    e jogos gladiatoriais em que seu pai tem vivido há 25 anos.`
    buttom.innerHTML = `
    <a href="">
    <img src="Img/icones/play.png" height="20px" width="20px" />
    Assistir
    </a>`
  } else if (vezes == 4) {
    titulo.innerHTML = `Operação Big Hero`
    texto.innerHTML = `
    Na cidade high-tech de San Fransokyo, 
    o prodígio da robótica Hiro Hamada testemunha a paz local ser ameaçada por forças poderosas e, 
    acompanhado pelo robô Baymax, se une a um time de combatentes inexperientes, 
    porém determinado a enfrentar os inimigos e salvar o paraíso futurista da destruição.`
    buttom.innerHTML = `
    <a href="">
    <img src="Img/icones/play.png" height="20px" width="20px" />
    Assistir
    </a>`
  }

  imgs.style.transform = `translateX(${-vezes * 100}%)`;
}
setInterval(Carrossel, 5000);
