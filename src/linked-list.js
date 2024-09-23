function createNode(valueIn) {
  let value = valueIn;
  let nextNode = null;
  return { value, nextNode };
}

function createLinkedList() {
  // we need head, tail, size,
  let head = null;
  const getHead = () => head;

  let tail = null;
  const getTail = () => tail;

  let size = 0;
  const getSize = () => size;

  // append function, prepend function,
  const append = (value) => {
    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = head;
      size++;
      return;
    }

    if (size <= 1) {
      tail = newNode;
      head.nextNode = tail;
      size++;
      return;
    }

    let currNode = tail;
    currNode.nextNode = newNode;
    tail = currNode.nextNode;
    size++;
  };

  const prepend = (value) => {
    if (Array.isArray(value)) {
      return;
    }

    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = head;
      size++;
      return;
    }

    let currNode = head;
    newNode.nextNode = currNode;
    head = newNode;
    size++;
  };

  // at function, pop function,
  const at = (index) => {
    if (index >= size || index < 0) {
      throw new Error("Index out of bound");
    }

    let currNode = head;

    for (let i = 0; i < size; i++) {
      if (index === i) {
        let returnNode = currNode;
        return returnNode;
      }

      currNode = currNode.nextNode;
    }
  };

  const pop = () => {
    let currNode = head;
    let lastNode = tail;

    for (let i = 0; i < size; i++) {
      if (i !== size - 2) {
        currNode = currNode.nextNode;
        continue;
      }

      currNode.nextNode = null;
      tail = currNode;
      break;
    }

    size--;
    return lastNode;
  };

  // contains function, find function,
  const contains = (value) => {
    let currNode = head;

    for (let i = 0; i < size; i++) {
      if (currNode.value === value) {
        return true;
      }

      currNode = currNode.nextNode;
    }

    return false;
  };

  const find = (value) => {
    let currNode = head;

    for (let i = 0; i < size; i++) {
      if (currNode.value === value) {
        return i;
      }

      currNode = currNode.nextNode;
    }

    return null;
  };

  // and toString function,
  const toString = () => {
    let printable = "";
    // ( value ) -> ( value ) -> ( value ) -> null
    let currNode = head;

    for (let i = 0; i < size; i++) {
      let formatNodePrint = "";
      if (Array.isArray(currNode.value)) {
        formatNodePrint += `( ${currNode.value[1]} )`;
      } else {
        formatNodePrint += `( ${currNode.value} )`;
      }
      if (currNode.nextNode) {
        formatNodePrint += " -> ";
      } else {
        formatNodePrint += " -> null";
      }

      printable += formatNodePrint;
      currNode = currNode.nextNode;
    }

    return printable;
  };

  // also insertAt function and removeAtFunction
  const insertAt = (value, index) => {
    if (Array.isArray(value)) {
      return;
    }

    if (index >= size || index < 0) {
      return;
    }

    const newNode = createNode(value);

    if (head === null) {
      head = newNode;
      tail = head;
      size++;
      return;
    }

    if (size <= 1) {
      tail = newNode;
      head.nextNode = tail;
      size++;
      return;
    }

    let currNode = head;

    for (let i = 0; i < size; i++) {
      if (i === index - 1) {
        const newNextNode = currNode.nextNode;
        newNode.nextNode = newNextNode;
        currNode.nextNode = newNode;
        size++;
        break;
      }
      currNode = currNode.nextNode;
    }
  };

  const removeAt = (index) => {
    if (index >= size || index < 0) {
      return;
    }

    let currNode = head;
    let removedNode;

    for (let i = 0; i < size; i++) {
      if (index === 0) {
        removedNode = currNode;
        currNode = null;
        head = null;
        tail = null;
        size--;
        break;
      }

      if (i === index - 1) {
        removedNode = currNode.nextNode;
        const newNextNode = removedNode.nextNode;
        currNode.nextNode = newNextNode;
        size--;
        break;
      }
      currNode = currNode.nextNode;
    }

    return removedNode;
  };

  return {
    getHead,
    getTail,
    getSize,
    append,
    prepend,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

module.exports = { createLinkedList, createNode };
