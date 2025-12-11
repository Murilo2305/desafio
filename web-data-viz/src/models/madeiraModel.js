var database = require("../database/config");

function alterarFaixa(id, min, max, desc) {

    var instrucaoSql = '';

    if (min == null && max == null) {

        instrucaoSql = `
        update galpao set 
        descricao = '${desc}'
        where id = ${id}
        `

    }else if(min == null && desc == null){

        instrucaoSql = `
        update galpao set 
        umidade_maxideal = ${max}
        where id = ${id}
        `

    }else if(max == null && desc == null){

        instrucaoSql = `
        update galpao set 
        umidade_minideal = ${min}
        where id = ${id}
        `        

    }else if(desc == null){

        instrucaoSql = `
        update galpao set 
        umidade_minideal = ${min},
        umidade_maxideal = ${max}
        where id = ${id}
        `    

    }else{

        instrucaoSql = `
        update galpao set 
        umidade_minideal = ${min},
        umidade_maxideal = ${max},
        descricao = '${desc}'
        where id = ${id}
        `    

    }

    return database.executar(instrucaoSql);

}

function obterFaixa(id){

    var instrucaoSql = `
    select 
    descricao as 'descricao',
    umidade_minideal as 'min',
    umidade_maxideal as 'max'
    from galpao where id = ${id}
    `;

    return database.executar(instrucaoSql);

}

module.exports = {
  alterarFaixa,
  obterFaixa
}