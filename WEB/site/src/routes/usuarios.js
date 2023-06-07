var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/listar_baterias", function (req, res) {
    usuarioController.listar_baterias(req, res);
});

router.post("/listar_Treinos", function (req, res) {
    usuarioController.listar_Treinos(req, res);
});

router.post("/listar_Treinos_geral", function (req, res) {
    usuarioController.listar_Treinos_geral(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar_rudimento", function (req, res) {
    usuarioController.cadastrar_rudimento(req, res);
})

router.post("/cadastrar_bateria", function (req, res) {
    usuarioController.cadastrar_bateria(req, res);
})

router.post("/deletar_rudimento", function (req, res) {
    usuarioController.deletar_rudimento(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;