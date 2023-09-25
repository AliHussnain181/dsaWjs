const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null
    }
    addToHead(data) {
        const newHead = new Node(data)
        const currentNode = this.head
        this.head = newHead
        if (currentNode) {
            this.head.setNextNode(currentNode)
        }
    }
    addToTail(data) {
        let tail = this.head
        if (!tail) {
            this.head = new Node()
        }
        else {
            while (tail.getNextNode() !== null) {
                tail = tail.getNextNode()
            }
            tail.setNextNode(new Node(data));
        }
    }
    removeHead() {
        const removedHead = this.head;
        if (!removedHead) {
            return;
        }
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while (currentNode !== null) {
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}


module.exports = LinkedList;