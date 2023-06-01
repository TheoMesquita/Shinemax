var graficoModel = require("../Models/graficoModel");

function buscarUltimosValores(req, res) {

    var idVoto = req.params.idVoto;

    console.log(`Recuperando as ultimos valores`);

    graficoModel.buscarUltimosValores(idVoto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos valores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrarAvaliacao(req, res) {
// Crie uma variável que vá recuperar os valores do arquivo index.html
var avaliacao = req.body.avaliacaoServer;

console.log(avaliacao)
// Faça as validações dos valores
if (avaliacao == undefined) {
  res.status(400).send("Seu avaliacao está undefined!");
} else {
  // Passe os valores como parâmetro e vá para o arquivo graficoModel.js
  graficoModel
    .cadastrarAvaliacao(
        avaliacao
    )
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        "\nHouve um erro ao realizar o cadastro! Erro: ",
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}
}

function buscarValoresTempoReal(req, res) {

    var idVoto = req.params.idVoto;

    console.log(`Recuperando valores em tempo real`);

    graficoModel.buscarValoresTempoReal(idVoto).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos valores.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosValores,
    cadastrarAvaliacao,
    buscarValoresTempoReal

}