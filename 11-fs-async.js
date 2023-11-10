const { readFile, writeFile } = require("fs");

console.log("Start of the task");
const first = readFile("./contents/first.txt", "utf8", (err, results) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = results;
  // console.log(results);

  readFile("./contents/second.txt", "utf8", (err, results) => {
    if (err) {
      console.log(err);
      return;
    }

    const second = results;
    // console.log(results);

    writeFile(
      "./contents/result-async.txt",
      `result: ${first} ${second}\n`,
      { flag: "a" },
      (err, results) => {
        if (err) {
          console.log(err);
          return;
        }

        // console.log('Your file is updated or if the file doesn\'t exits then your file is created');
        console.log("End of the task");
      }
    );
  });
});
console.log("Start of next task");
