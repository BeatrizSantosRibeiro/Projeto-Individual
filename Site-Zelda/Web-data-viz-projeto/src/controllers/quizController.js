var quizModel = require("../models/quizModel");


function salvarpontuacao(req, res) {
    var id = req.body.fkUsuariosServer;
    var pontuacao = req.body.pontuacaoServer;

    if (pontuacao == undefined) {
        res.status(400).send("Seu pontuacao está undefined!");
    }

    quizModel.salvarquiz(pontuacao, id).then(function (resposta) {
        res.status(200).send("pontuacao cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}



function contarJogadas(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.contarJogadas(idUsuario)
        .then(resultado => {
            res.json(resultado);
            console.log("resultado controller", resultado)
        })
        .catch(erro => {
            console.error("Erro ao contar jogadas", erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function mediaPontuacaoes(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.mediaPontuacaoes(idUsuario)
        .then(resultado => {
            res.json(resultado);
            console.log("resultado controller", resultado)
        })
        .catch(erro => {
            console.error("Erro ao contar jogadas", erro);
            res.status(500).json(erro.sqlMessage);
        });
}


function dados(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.dados(idUsuario)
        .then(resultado => {
            res.json(resultado);
            console.log("resultado controller", resultado)
        })
        .catch(erro => {
            console.error("Erro ao contar jogadas", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvarpontuacao,
    contarJogadas,
    mediaPontuacaoes,
    dados
}