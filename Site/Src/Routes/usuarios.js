var express = require("express");
var router = express.Router();

var usuarioController = require("../Controller/usuarioController");

router.get("/listar", function (req, res) {
  usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
  console.log('oi')
  usuarioController.cadastrar(req, res);
});

router.post("/autenticar", function (req, res) {
  usuarioController.entrar(req, res);
});

module.exports = router;
