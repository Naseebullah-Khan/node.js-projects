const { readFile } = require('fs')
const { readFileSync } = require('fs')

readFile('../contents/first.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})
const file = readFileSync('../contents/second.txt', 'utf8')
console.log(file);