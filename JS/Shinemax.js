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

function mostrarmenu(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){

        document.getElementById(el).style.display = 'flex'
        document.getElementById(el).className = 'barramenu'
    } else {
        document.getElementById(el).style.display = 'none';
    }

}
function mostrarpesquisa(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none"){

        document.getElementById(el).style.display = 'flex'
        document.getElementById(el).className = 'barrapesquisa'
    } else {
        document.getElementById(el).style.display = 'none';
    }

}
