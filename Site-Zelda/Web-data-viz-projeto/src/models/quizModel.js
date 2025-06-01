var database = require("../database/config")

function salvarquiz(pontuacao, fkUsuarios) {
    var instrucao = `
        INSERT INTO TentativaQuiz (pontuacao, fkUsuarios, fkQuiz) VALUES ('${pontuacao}', '${fkUsuarios}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function BuscarPontuacao(idUsuario){
    var instrucao =
    `select date_format(data_jogada, '%y%m%d') as data, pontuacao
    from TentativaQuiz
    where fkUsuarios = ${idUsuario}
    order by data_jogada desc
    limit 5;`;

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

module.exports = {
    salvarquiz,
    BuscarPontuacao,
    contarJogadas
};