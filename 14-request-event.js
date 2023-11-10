const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/") res.end("Homepage");
  else if (req.url === "/about") res.end("About Page");
  else res.end("Error Page");
});
server.listen(2000, () => {
  console.log("Server is listenning on port 2000");
});
