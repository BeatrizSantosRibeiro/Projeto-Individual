// Importando a configuração do banco para fazer consultas futuras no banco

var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT * FROM memoria;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome) {
    var instrucao = `
        INSERT INTO memoria (nome, tempo,fkUsuario) VALUES ('${nome}','${tempo}','${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// exportar as funções que criamos para serem vistas por outros arquivos

module.exports = {
    cadastrar,
    listar
};