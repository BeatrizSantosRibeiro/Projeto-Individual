var quizModel = require("../models/quizModel");


function salvarpontuacao(req, res) {
    var id = req.body.fkUsuarioServer;
    var pontuacao = req.body.pontuacaoServer;

    if (pontuacao == undefined) {
        res.status(400).send("Seu pontuacao está undefined!");
    }

    quizModel.salvarquiz(pontuacao, id).then(function(resposta){
        res.status(200).send("pontuacao cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    salvarpontuacao
}