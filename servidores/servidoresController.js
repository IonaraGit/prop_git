const express = require("express");
const router = express.Router();

router.get("/servidor/avaliacao", (requisicao, resposta) => {
  resposta.send("ROTA PARA AVALIACAO")
})

module.exports = router;