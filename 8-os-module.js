const os = require("os");

console.log(os.userInfo());

console.log(`Time = ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  arch: os.arch(),
  released: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
os.arch();
console.log(currentOS);
