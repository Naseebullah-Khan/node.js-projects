const path = require("path");

console.log(path.sep);
// join()-> making a path from the parameter given
const pathFile = path.join("content", "subFolder", "test.txt");

console.log(pathFile);
// basename()-> shows the name of file
const file = path.basename(pathFile);

console.log(file);
// resolve()-> shows the full path from the drive until the file
const absolute = path.resolve(__dirname, pathFile);

console.log(absolute);

console.log(path.isAbsolute(pathFile));
console.log(path.isAbsolute(absolute));

console.log(path.normalize("/df/dfds/fd/dsfs/dsf/sdf"));
