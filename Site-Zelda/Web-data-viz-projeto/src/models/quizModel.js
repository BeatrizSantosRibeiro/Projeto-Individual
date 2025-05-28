var database = require("../database/config")

function salvarquiz(pontuacao, fkUsuario) {
    var instrucao = `
        INSERT INTO Quiz (pontuacao, fkUsuario) VALUES ('${pontuacao}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    salvarquiz
};