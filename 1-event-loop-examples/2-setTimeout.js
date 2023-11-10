const { readFileSync } = require('fs')

console.log('First Task');

setTimeout(() => {
    console.log('Hello');
},3000)
 console.log(readFileSync('contents\\first.txt', 'utf8'));