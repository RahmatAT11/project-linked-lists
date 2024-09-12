// test linked list
const LinkedListModule = require("./linked-list");
const linkedList = LinkedListModule.createLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(10);
linkedList.append(20);
linkedList.append([]);
linkedList.prepend(0);
linkedList.append(100);

console.log(linkedList.contains(100));