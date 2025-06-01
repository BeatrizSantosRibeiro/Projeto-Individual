var quizModel = require("../models/quizModel");


function salvarpontuacao(req, res) {
    var id = req.body.fkUsuariosServer;
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

function BuscarPontuacao(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.BuscarPontuacao(idUsuario)
    .then(resultado => {
        if(resultado.length > 0) {
            const pontuacao = resultado.map(linha => linha.pontuacao);
            const datas = resultado.map(linha => linha.data);
            const ultimaPuntuacao = pontuacao[0];
            const mediaPontuacao = pontuacao.reduce((a, b) => Number(a) + Number(b), 0) / pontuacao.length;
       
       res.json({
        ultimaPuntuacao,
        mediaPontuacao: mediaPontuacao.toFixed(2),
        pontuacao,
        datas
       });
       
        }
    })
    .catch(function(erro) {
        console.error("erro ao buscar pontuação", erro);
        res.status(500).json(erro.sqlMessage)
    });
}


function contarJogadas(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.contarJogadas(idUsuario)
    .then(resultado => {
        res.json(resultado);
        console.log("resultado controller",resultado)
    })
    .catch(erro => {
        console.error("Erro ao contar jogadas", erro);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    salvarpontuacao,
    BuscarPontuacao,
    contarJogadas
}