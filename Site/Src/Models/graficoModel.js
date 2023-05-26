var database = require("../Database/config");

function buscarValores(idGrafico, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        gostei as Like, 
        naoGostei as Deslike,
        aindaNaoSei as SemLike, 
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from grafico
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        gostei as Like, 
        naoGostei as Deslike,
        aindaNaoSei as SemLike,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from grafico
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarValoresEmTempoReal(idGrafico) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        gostei as Like, 
        naoGostei as Deslike,
        aindaNaoSei as SemLike,
                        CONVERT(varchar, momento, 108) as momento_grafico 
                        from grafico
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        gostei as Like, 
        naoGostei as Deslike,
        aindaNaoSei as SemLike,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                        from grafico
                    order by id desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarValores,
    buscarValoresEmTempoReal
}
