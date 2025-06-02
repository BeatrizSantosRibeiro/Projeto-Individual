var database = require("../database/config")

function salvarquiz(pontuacao, fkUsuarios) {
    var instrucao = `
        INSERT INTO TentativaQuiz (pontuacao, fkUsuarios, fkQuiz) VALUES ('${pontuacao}', '${fkUsuarios}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function contarJogadas(idUsuario) {
    var instrucao = `
    SELECT COUNT(*) AS totaljogadas FROM TentativaQuiz WHERE fkUsuarios = ${idUsuario};
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function mediaPontuacaoes(idUsuario) {
    var instrucao = `
    SELECT truncate(avg(pontuacao),1) AS mediaPontuacao FROM TentativaQuiz WHERE fkUsuarios = ${idUsuario};
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function dados(idUsuario) {
    var instrucaoUsuario = `
        SELECT DATE_FORMAT(data_jogada, '%d/%m') AS data, pontuacao
        FROM TentativaQuiz
        WHERE fkUsuarios = ${idUsuario}
        ORDER BY data_jogada DESC
        LIMIT 5;
    `;

    var instrucaoOutros = `
        SELECT pontuacao
        FROM TentativaQuiz
        WHERE fkUsuarios != ${idUsuario}
        ORDER BY data_jogada DESC
        LIMIT 5;
    `;

    console.log("Executando SQL para usuário:\n" + instrucaoUsuario);
    console.log("Executando SQL para outros jogadores:\n" + instrucaoOutros);


    return Promise.all([
        database.executar(instrucaoUsuario),
        database.executar(instrucaoOutros)
    ]).then(([resUsuario, resOutros]) => {
        return {
            pontuacao: resUsuario.map(r => r.pontuacao),
            datas: resUsuario.map(r => r.data),
            pontuacaoutros: resOutros.map(r => r.pontuacao)
        };
    });
}


module.exports = {
    salvarquiz,
    dados,
    contarJogadas,
    mediaPontuacaoes
};