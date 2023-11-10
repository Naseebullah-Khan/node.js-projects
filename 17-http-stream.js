const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./contents/big.txt')
    // res.end(text)
    const fileStream = fs.createReadStream("./contents/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    });
    fileStream.on("error", (err) => res.end(err));
  })
  .listen(5000);
