var express = require("express");
var router = express.Router();

var memoriaController = require("../controllers/memoriaController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    memoriaController.cadastrar(req, res)
});


router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    memoriaController.listar(req, res);
});

module.exports = router;