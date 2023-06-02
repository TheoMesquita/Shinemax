// sessão
function onlineOffline() {
    var pessoa = {
        nome: sessionStorage.nome,
        sobrenome: sessionStorage.sobrenome,
        apelido: sessionStorage.apelido,
        idade: sessionStorage.idade,
        pais: sessionStorage.pais,
        genero: sessionStorage.genero,
        email: sessionStorage.email
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