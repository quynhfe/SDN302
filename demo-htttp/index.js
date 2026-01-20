var http = require("http");
const hostname = "localhost";
const port = 3000;

http
  .createServer(function (req, res) {
    console.log(req.headers);
    res.statusCode = 200;
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(port);

console.log(`Server running at http://${hostname}:${port}/`);
