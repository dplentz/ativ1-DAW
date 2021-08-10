const express = require("express");
const router = express.Router();
var numbersController = require("../controller/numbersController")

router.get("/",numbersController.listar);
router.post("/",numbersController.listarFiltro);

router.get("/add", numbersController.abreAdd);
router.post("/add", numbersController.add);

router.get("/edt/:id", numbersController.abreEdt);
router.post("/edt/:id", numbersController.edt);

router.get("/del/:id", numbersController.del);

module.exports = router;