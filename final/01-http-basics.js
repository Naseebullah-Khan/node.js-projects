const http = require("http");
const { readFileSync } = require("fs");
// get all Files
const homepage = readFileSync("./html/index.html");
const about = readFileSync("./html/about.html");
const page404 = readFileSync("./html/404.html");

const server = http.createServer((req, res) => {
  // console.log("User hit the server!");
  // console.log(req);
  // console.log(req.method);
  // console.log(req.url);
  const url = req.url;
  // Homepage
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.writeHead(400, { "content-type": "text/plain" });
    // res.write("<h1>Homepage</h1>");
    res.write(homepage);
    res.end();
  }
  // About Page
  else if (url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    // res.write("<h1>About Page</h1>");
    res.write(about);
    res.end();
  }
  // 404 Page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    // res.write("<h1>Page Not Found</h1>");
    res.write(page404);
    res.end();
  }
});
server.listen(4000);
