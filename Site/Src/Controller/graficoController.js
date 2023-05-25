var graficoModel = require("../Models/graficoModel");

function buscarUltimosValores(req, res) {

    const limite_linhas = 7;

    var idGrafico = req.params.idGrafico;

    console.log(`Recuperando as ultimas ${limite_linhas} valores`);

    graficoModel.buscarUltimosValores(idGrafico, limite_linhas).then(function (resultado) {
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


function buscarValoresEmTempoReal(req, res) {

    var idGrafico = req.params.idGrafico;

    console.log(`Recuperando valores em tempo real`);

    graficoModel.buscarValoresEmTempoReal(idGrafico).then(function (resultado) {
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
    buscarValoresEmTempoReal

}