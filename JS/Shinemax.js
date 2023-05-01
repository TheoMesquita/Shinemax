/* Carrossel */
var count = 1;
    document.getElementById("radio1").checked = true;

    setInterval(function () {
        nextImage();
    }, 3000);

    function nextImage() {
        count++;
        if (count > 4) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
    }

/* Botão */
function mostrar(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}
