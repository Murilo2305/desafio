var express = require("express");
var router = express.Router();

var madeiraController = require("../controllers/madeiraController");

router.get("/alterarFaixa", function (req, res) {
    madeiraController.alterarFaixa(req, res);
});

router.get('/obterFaixa/:idGalpao', function (req,res){
    madeiraController.obterFaixa(req,res);
});

module.exports = router;