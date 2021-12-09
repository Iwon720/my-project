const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

http
  .createServer((request, response) => {
    response.writeHead(200, {
      "Content type": "application/json", // text/html; charset-utf-8
    });
    response.end(JSON.stringify({ id: 1, name: "Andrey" }));
  })
  .listen(PORT, process.env.HOST, () => {
    console.log(`start on port = ${PORT}`);
  });
