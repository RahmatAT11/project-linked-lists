// test linked list
const linkedListModule = require("./linked-list");
const linkedList = linkedListModule.createLinkedList();

for (let i = 0; i < 10; i++) {
  linkedList.append(i);
}

console.log(linkedList.toString());
