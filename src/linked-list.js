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
        if (value === typeof []) {
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

        let currNode = tail;
        currNode.nextNode = newNode;
        tail = currNode.nextNode;
        size++;

    };

    const prepend = (value) => {
        if (value === typeof []) {
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
            if (i !== size-2) {
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
    }

    // and toString function,
    // also insertAt function and removeAtFunction

    return {getHead, getTail, getSize, append, prepend, at, pop, contains, find};
}

module.exports = {createLinkedList, createNode};