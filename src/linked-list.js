function createNode(value) {
    return {value, nextNode}
}

function createLinkedList() {
    // we need head, tail, size,
    let head = null;
    let tail = null;
    let size = 0;
    // append function, prepend function,
    // at function, pop function,
    // contains function, find function,
    // and toString function,
    // also insertAt function and removeAtFunction

    return {head, tail, size};
}

module.exports = {createLinkedList, createNode};