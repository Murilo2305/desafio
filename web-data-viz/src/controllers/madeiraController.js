var madeiraModel = require("../models/madeiraModel");

function alterarFaixa(req,res){

    id = req.body.idGalapao;
    min = req.body.min;
    max = req.body.max;
    desc = req.body.desc;

    madeiraModel.alterarFaixa(id,min,max,desc)
        .then((resposta) => {

            if(resposta.ok){

                res.status(200).send('Tudo Certo');

            }

        })
        .catch((erro) => {

            res.status(500).send('Erro: '+ erro);

        })

}

function obterFaixa(req,res){

    id = req.body.idGalpao;

    madeiraModel.obterFaixa(id)
        .then((resultado) => {
                res.status(200).send(resultado);

     

        })
        .catch((erro) => {

            res.status(500).send('Erro: '+ erro);

        })

}

module.exports = {
    alterarFaixa,
    obterFaixa
}