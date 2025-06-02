var express = require("express");
var router = express.Router();

var memoriaController = require("../controllers/memoriaController");

router.post("/salvarmemoria", function (req, res) {
    // função a ser chamada quando acessar /carros/cadastrar
    memoriaController.salvartimer(req, res);
});


router.get("/ultimotemporegis/:idUsuario", function (req, res) {
    memoriaController.ultimotemporegis(req, res);
});

router.get("/ultimapontuacaoregis/:idUsuario", function (req, res) {
    memoriaController.ultimapontuacaoregis(req, res);
});

router.get("/contarjogadasmemo/:idUsuario", function (req, res) {
    memoriaController.contarJogadasmemo(req, res);
});


router.get("/mediamemoria/:idUsuario", function (req, res) {
    memoriaController.mediamemoria(req, res);
});


router.get("/mendados/:idUsuario", function (req, res) {
    memoriaController.mendados(req, res);
});

module.exports = router;