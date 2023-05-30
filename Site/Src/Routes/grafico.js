var express = require("express");
var router = express.Router();

var graficoController = require("../Controller/graficoController");

router.get("/ultimas/:grafico", function (req, res) {
    graficoController.buscarUltimosValores(req, res);
});

router.get("/tempo-real/:grafico", function (req, res) {
    graficoController.buscarValoresTempoReal(req, res);
})

module.exports = router;