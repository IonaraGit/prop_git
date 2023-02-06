const express = require ("express");
const app = express();
const bodyParser = require ("body-parser")
const connection = require("./database/database");

//Contoller's
const adminsController = require ("./admins/adminsController");
const servidoresController = require("./servidores/servidoresController");
app.use("/", adminsController);
app.use("/", servidoresController);



//View Engine 
app.set('view engine', 'ejs');

//Static
app.use(express.static('public'));

//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Database
connection.authenticate().then(() => {
  console.log("Conexão ok!")
}).catch((error) => {
  console.log(error);
});



app.get("/", (requisicao, resposta) => {
  resposta.render("index");
});

app.listen(8080, () => {
  console.log("Servidor Ok!");
});