const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Welcomr to the homepage");
  else if (req.url === "/about") res.end("About Page");
  else {
    res.end(
      `<h1>Oops!</h1>
            <p>Can't find the page </p>
            <a href="/">back to homepage</a>
            `
    );
  }
});
server.listen(5000);
