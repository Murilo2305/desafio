var express = require("express");
var router = express.Router();

var madeiraController = require("../controllers/madeiraController");

router.get("/alterarFaixa", function (req, res) {
    madeiraController.alterarFaixa(req, res);
});

router.post('/obterFaixa', function (req,res){
    madeiraController.obterFaixa(req,res);
});

module.exports = router;

// fetch('/madeira/alterarFaixa',{

//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         idGalpao: Insira_algo,
//         min: Insira_algo,
//         max: Insira_algo,
//         desc: Insira_algo
//     })
     
// })
// .then((resultado) => {

//     console.log('Tudo Certo! Mensagem: '+ resultado);

// })
// .catch((erro) => {

//     console.log('Algo deu errado! erro: '+ erro);

// })

// fetch(`/madeira/obterFaixa/${Insira_algo}`)
//     .then((resultado) => {

//         console.log('Tudo Certo! Mensagem: '+resultado);

//     })
//     .catch((erro) => {

//         console.log('Algo deu errado!Mensagem: '+ erro);

//     })