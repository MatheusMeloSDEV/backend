const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
const PORT = process.env.PORT || 8080;

const routes = require("./routes/routes");
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
// Obtendo os parametros passados pela linha de comando
var userArgs = process.argv.slice(2);
var mongoURL = userArgs[0];
//Configurando a conexao com o Banco de Dados
var mongoose = require("mongoose");

const conn_str =
  "mongodb+srv://admin:FnofVAArebJlrNmM@cluster0.0y0uz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
  conn_str,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");
    }
  }
);
//create a server object:
app.listen(port, () => {
  console.log("starting the server");
});
//the server object listens on port 8080
