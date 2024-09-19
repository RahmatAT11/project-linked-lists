const linkedListModule = require("./src/linked-list");
const test = linkedListModule.createLinkedList();
test.append("acdc");
console.log(test.removeAt(0));
console.log(test.getHead())
module.exports = linkedListModule;