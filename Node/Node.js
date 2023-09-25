// 1

// class Node {
//     constructor(data) {
//       this.data = data
//       this.next = null
//     }
//   }

//   let firstNode = new Node('I am an instance of a Node!')
//   console.log(firstNode.data)
//   console.log(firstNode.next)

//   module.exports = Node;

// 2

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
//   setNextNode(node) {
//     this.next = node
//   }
// }

// const firstNode = new Node('I am an instance of a Node!');
// const secondNode = new Node('I am the next Node!');

// firstNode.setNextNode(secondNode);

// console.log(firstNode);

// module.exports = Node;


// 3

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }

//   setNextNode(node) {
//     if (node instanceof Node || node === null) {
//       this.next = node;
//     } else {
//       throw new Error('Next node must be a member of the Node class.');
//     }
//   }
// }

// const firstNode = new Node('I am an instance of a Node!');
// firstNode.setNextNode('This is a string, not a Node.');

// module.exports = Node;



// 4


// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }

//   setNextNode(node) {
//     if (node instanceof Node || node === null) {
//       this.next = node;
//     } else {
//       throw new Error('Next node must be a member of the Node class.');
//     }
//   }

//   getNextNode() {
//     return this.next;
//   }
// }

// const firstNode = new Node('I am an instance of a Node!');
// const secondNode = new Node('I am the next Node!');
// firstNode.setNextNode(secondNode);

// console.log(firstNode.getNextNode());

// module.exports = Node;




// 5

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('Next node must be a member of the Node class.');
    }
  }

  getNextNode() {
    return this.next;
  }
}

const strawberryNode = new Node('Berry Tasty');
const vanillaNode = new Node('Vanilla');
const coconutNode = new Node('Coconuts for Coconut');

vanillaNode.setNextNode(strawberryNode);
strawberryNode.setNextNode(coconutNode);

let currentNode = vanillaNode;
while(currentNode) {
  console.log(currentNode.data);
  currentNode = currentNode.getNextNode();
}


module.exports = Node;

