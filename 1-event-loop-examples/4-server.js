const http = require('http');

const server = http.createServer((req,res) => {
    console.log('http');
    res.end(`<h1>Hello World!</h1>`)
})

server.listen(2000,() => {
    console.log(`Server is listenning on port 2000`);
})