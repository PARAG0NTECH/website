var express = require('express');
var router = express.Router();

var pessoaController = require("../controllers/pessoaController");


router.post("/cadastrar", function (req, res){
    pessoaController.cadastrar(req, res);
});

router.post("/cadastrarEmpresa", function (req, res){
    pessoaController.cadastrarEmpresa(req, res);
});

router.post("/cadastrarMetrica", function (req, res){
    pessoaController.cadastrarMetrica(req, res);
});

router.get("/listar", function (req, res){
    pessoaController.listarUsers(req, res);
});
router.get("/listarEmpresas", function (req, res){
    pessoaController.listarEmpresas(req, res);
});

router.get("/userAtual", function (req, res){
    pessoaController.gerarUserAtual(req, res);
});

router.put("/editar/:id", function(req, res){
    pessoaController.editarUser(req, res);
});

router.delete("/delete/:id", function(req, res){
    pessoaController.deletarUser(req, res);
});


module.exports = router;