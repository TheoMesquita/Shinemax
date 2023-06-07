// sessão
function onlineOffline() {
    var on = document.getElementById("online");
    var of = document.getElementById("offline");
    if (!sessionStorage.getItem("")) {
        on.style.display = "block"
        Of.style.display = "none"
    } else {
        on.style.display = "none"
        Of.style.display = "block"
    }
}

function limparSessao() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "index.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}