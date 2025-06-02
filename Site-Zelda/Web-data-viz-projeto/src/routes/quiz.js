var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarquiz", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    quizController.salvarpontuacao(req, res);
});

router.get("/contarjogadas/:idUsuario", function (req, res) {
    quizController.contarJogadas(req, res);
});

router.get("/mediaPontuacaoes/:idUsuario", function (req, res) {
    quizController.mediaPontuacaoes(req, res);
});

router.get("/dados/:idUsuario", function (req, res) {
    quizController.dados(req, res);
});

module.exports = router;