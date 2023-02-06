const express = require("express");
const router = express.Router();

router.get("/admin/painel", (requisicao, resposta) => {
  resposta.send("ROTA PARA PAINEL ADM")
})

module.exports = router;