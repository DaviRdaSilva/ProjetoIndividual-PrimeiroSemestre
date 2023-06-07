var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT 
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Muito Fácil') AS Muito_Facil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Fácil') AS Facil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Moderado') AS Moderada,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Dificil') AS Dificil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Muito Dificil') AS Muito_Dificil
        FROM Rudimentos;
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT 
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Muito Fácil') AS Muito_Facil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Fácil') AS Facil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Moderado') AS Moderada,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Dificil') AS Dificil,
        (SELECT COUNT(Dificuldade) FROM Rudimentos WHERE FKUsuario = ${idUsuario} AND Dificuldade = 'Muito Dificil') AS Muito_Dificil
        FROM Rudimentos;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
