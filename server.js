const http = require("http");

http
  .createServer((req, res) => {
    res.end("OK");
  })
  .listen(Number(process.env.PORT));
