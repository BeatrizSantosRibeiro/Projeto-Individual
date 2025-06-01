// conexão com o banco 

var memoriaModel = require("../models/memoriaModel");


function salvartimer(req, res) {
    var id = req.body.fkUsuariosServer;
    var timer = req.body.timerServer;



    memoriaModel.salvarmemoria(timer, id).then(function (resposta) {
        res.status(200).send("tempo cadastrado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}




function obterestatisticas(req, res) {
    var idUsuario = req.params.idUsuario;

    memoriaModel.obterestatisticas(idUsuario)
        .then(resultado => {
            if (resultado.length > 0) {
                const tempos = resultado.map(linha => linha.tempo);
                const datas = resultado.map(linha => linha.data);


                const ultimoTempo = tempos[0];
                const mediaTempo = tempos.reduce((a, b) => Number(a) + Number(b), 0) / tempos.length;


                res.json({
                    ultimoTempo,
                    mediaTempo: mediaTempo.toFixed(2),
                    tempos,
                    datas
                });
            }

            else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.error("erro ao buscar pontuação", erro);
            res.status(500).json(erro.sqlMessage)
        });
}

function ultimotemporegis(req, res) {
    var idUsuario = req.params.idUsuario;

    memoriaModel.ultimotemporegis(idUsuario)
        .then(resultado => {
            res.json(resultado);
            console.log("resultado controller", resultado)
        })
        .catch(erro => {
            console.error("Erro ao procurar tempo", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function ultimapontuacaoregis(req, res) {
    var idUsuario = req.params.idUsuario;

    memoriaModel.ultimapontuacaoregis(idUsuario)
        .then(resultado => {
            res.json(resultado);
            console.log("resultado controller", resultado)
        })
        .catch(erro => {
            console.error("Erro ao procurar tempo", erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    salvartimer,
    obterestatisticas,
    ultimotemporegis,
    ultimapontuacaoregis
}