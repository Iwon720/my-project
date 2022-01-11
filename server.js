const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;
const userRouter = require('./routes/userRouter');


app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header("Access-Control-Allow-Methods" , "GET,POST,PUT,DELETE,OPTIONS");
  next();
  });

app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Сервер начал прослушивание запросов на порту http://localhost:${PORT}`)
})