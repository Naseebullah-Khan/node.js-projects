// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./4-names");
const utils = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

utils(names.name);
utils(names.name2);
utils(names.name3);

console.log(data);
console.log(data.items);
console.log(data.items[0]);
console.log(data.items[1]);
console.log(data.items[2]);
console.log(data.items[3]);
console.log(data.person);
console.log(data.person.name);
console.log(data.person.age);
