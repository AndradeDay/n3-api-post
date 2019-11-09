const express = require("express")
const router = express.Router()
const bodyParser = require("body-parser")
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", bodyParser.json(), controller.add) // o bodyPasrer. json informa que está 
// recebendo uma importação de dados em json 

module.exports = router
