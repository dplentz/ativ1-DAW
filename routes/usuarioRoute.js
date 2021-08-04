const express = require("express");
const router = express.Router();
var usuarioController = require("../controller/usuarioController")

router.get("/",usuarioController.listar);
router.post("/",usuarioController.listarFiltro);

router.get("/add", usuarioController.abreAdd);
router.post("/add", usuarioController.add);

router.get("/edt/:id", usuarioController.abreEdt);
router.post("/edt/:id", usuarioController.edt);

router.get("/del/:id", usuarioController.del);

module.exports = router;