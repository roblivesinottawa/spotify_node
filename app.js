const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello from Spotify and Node");
    res.end();
  })
  .listen(5000);
