// Importando a configuração do banco para fazer consultas futuras no banco

var database = require("../database/config")


function salvarmemoria(tempo, fkUsuarios) {
    var instrucao = `
        INSERT INTO TentativaMemoria (tempo, fkUsuarios, fkMemoria) VALUES ('${tempo}', '${fkUsuarios}', 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function obterestatisticas(idUsuario) {
    var instrucao =
        `select tempo, date_format(data_jogada, '%d%m') as data
    from TentativaMemoria
    where fkUsuarios = ${idUsuario}
    order by data_jogada desc
    limit 10;`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ultimotemporegis(idUsuario) {
    var instrucao =
        `SELECT tempo as ultimotemporegis
    FROM TentativaMemoria
    WHERE fkUsuarios = ${idUsuario}
    ORDER BY data_jogada DESC
    LIMIT 1`;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function ultimapontuacaoregis(idUsuario) {
    var instrucao =
        `SELECT pontuacao as ultimapontuacao
    FROM TentativaQuiz
    WHERE fkUsuarios = ${idUsuario}
    ORDER BY pontuacao DESC
    LIMIT 1;`;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function contarJogadasmemo(idUsuario) {
    var instrucao = `
        SELECT COUNT(*) AS totaljogadasmemo FROM TentativaMemoria WHERE fkUsuarios = ${idUsuario};
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function mediamemoria(idUsuario) {
    var instrucao = `
        select truncate(avg(tempo),1) as tempomedio from TentativaMemoria
    where fkUsuarios = ${idUsuario};
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function mendados(idUsuario) {
    var instrucaoUsuario = `
        SELECT DATE_FORMAT(data_jogada, '%d/%m') AS data, tempo
        FROM TentativaMemoria
        WHERE fkUsuarios = ${idUsuario}
        ORDER BY data_jogada DESC
        LIMIT 5;
    `;

    var instrucaoOutros = `
        SELECT tempo as tempoutros
        FROM TentativaMemoria
        WHERE fkUsuarios != ${idUsuario}
        ORDER BY data_jogada DESC
        LIMIT 5;
    `;

    console.log("Executando SQL para usuário:\n" + instrucaoUsuario);
    console.log("Executando SQL para outros jogadores:\n" + instrucaoOutros);

    // Executa os dois SQLs em paralelo
    return Promise.all([
        database.executar(instrucaoUsuario),
        database.executar(instrucaoOutros)
    ]).then(([resUsuario, resOutros]) => {
        return {
            tempo: resUsuario.map(r => r.tempo),
            datas: resUsuario.map(r => r.data),
            tempoutros: resOutros.map(r => r.tempoutros)
        };
    });
}




module.exports = {
    salvarmemoria,
    obterestatisticas,
    ultimotemporegis,
    ultimapontuacaoregis,
    contarJogadasmemo,
    mediamemoria,
    mendados
};