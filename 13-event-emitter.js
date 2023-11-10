const eventEmitter = require("events");

const customEvent = new eventEmitter();

customEvent.on("response", (name, id) => {
  console.log(`Hello ${name} with ID ${id}`);
});
customEvent.on("response", () => {
  console.log("Hello World!");
});

customEvent.emit("response", "Naseeb", 11);
