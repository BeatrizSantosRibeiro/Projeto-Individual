var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarquiz", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    quizController.salvarpontuacao(req, res);
});


module.exports = router;