const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const computerRouter = require('./routes/computerRouter');

app.set("view engine", "hbs");


app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "auth, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
  next();
});

app.use("/computers", computerRouter);

app.get("/computers", function(req, res){
  User.findAll({raw: true }).then(data=>{
    res.render("index.hbs", {
      users: data
    });
  }).catch(err => console.log(err));
});

app.listen(PORT, () => {
    console.log(`Сервер начал прослушивание запросов на порту http://localhost:${PORT}`)
})