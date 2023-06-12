var express = require("express");
var router = express.Router();

var configController = require("../Controller/configController");


router.get("/cadastrar", function (req, res) {
    configController.buscarDados(req, res);
})

module.exports = router;