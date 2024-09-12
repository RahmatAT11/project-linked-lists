function createNode(valueIn) {
    let value = valueIn;
    let nextNode = null;
    return {value, nextNode}
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
    // contains function, find function,
    // and toString function,
    // also insertAt function and removeAtFunction

    return {getHead, getTail, getSize, append, prepend};
}

module.exports = {createLinkedList, createNode};