const {readFile, writeFile} = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
const start = async() => {
  try {
    const first = await readFile('./contents/first.txt', 'utf-8')
    const second = await readFile('./contents/second.txt', 'utf8')
    await writeFile('./contents/result-util.txt', `Result: ${first} ${second}\n`, {flag: 'a'})
    console.log(first);
    console.log(second);
  } catch (error) {
    console.log(error);
  }
}

start()


// const getText = (path) => {
//   return new Promise((resolve,reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if(err){
//         reject(err);
//       }
//       else{
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./contents/first.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));