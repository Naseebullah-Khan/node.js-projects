// importing moduls
const { readFileSync, read } = require("fs");
const http = require("http");
// get required files
const homepage = readFileSync("./navbar-app/index.html");
const style = readFileSync("./navbar-app/styles.css");
const js = readFileSync("./navbar-app/browser-app.js");
const logo = readFileSync("./navbar-app/logo.svg");
const about = readFileSync("./html/about.html");
const notFound = readFileSync("./html/404.html");
// creating server
const server = http.createServer((req, res) => {
  const url = req.url;
  // console.log(url);
  // homepage
  if (url === "/index.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homepage);
    res.end();
  }
  // css
  else if (url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(style);
    res.end();
  }
  // javaScript
  else if (url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(js);
    res.end();
  }
  // logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logo);
    res.end();
  }
  // about page
  else if (url === "about.html") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(about);
    res.end();
  }
  // 404 page
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write(notFound);
    res.end();
  }
});
server.listen(4000);
