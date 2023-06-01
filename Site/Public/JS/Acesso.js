// sessão
function onlineOffline(resposta) {
    var pessoa = {
        nome: resposta[0], 
        idade: resposta[0]}
}

function limparSessao() {
    aguardar();
    sessionStorage.clear();
    finalizarAguardar();
    window.location = "Login.html";
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