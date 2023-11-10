const { readFileSync, writeFileSync } = require("fs");

console.log("Start of task");
const readFirstFile = readFileSync("./contents/first.txt", "utf-8");
const readSecondFile = readFileSync("./contents/second.txt", "utf-8");

console.log(readFirstFile);
console.log(readSecondFile);

writeFileSync(
  "./contents/result-sync.txt",
  `result: ${readFirstFile} ${readSecondFile}\n`,
  { flag: "a" }
);

// console.log(readFileSync('./contents/result-sync.txt', 'utf8'));
console.log("End of the task");
console.log("Start of the next task");
