// DFS traversal of a tree structure

/* 
  starting from the root, use a recursive function to log the node before moving down 
  to the left as far as possible, logging it's path along the way. When the left side 
  is done, it'll start working on the remaning right values until the whole tree has been logged
  by the end, visited nodes should look similar to: [24, 14, 9, 3, 11, 19, ...].
*/

/* 
 InOrder Traversal (Left-Root-Right)
 PreOrder Traversal (Root-Left-Right)
 PostOrder Traversal (Left-Right-Root)
*/

function DFSPreOrder(node) {
  const result = [];

  function recursiveTraverse(currentNode) {
    if (node === null) {
      return;
    }

    result.push(currentNode.value);

    // traverse left
    if (currentNode.left) {
      recursiveTraverse(currentNode.left);
    }

    // traverse right
    if (currentNode.right) {
      recursiveTraverse(currentNode.right);
    }
  }

  recursiveTraverse(node);

  return result;
}


// generate a tree node
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.addLeft = function (value) {
    this.left = new Node(value);
    return this.left;
  }
  
  this.addRight = function (value) {
    this.right = new Node(value);
    return this.right;
  }


}

const root = new Node(24);
const left = root.addLeft(14);
const right = root.addRight(49);
left.addLeft(9);
left.addRight(19);
right.addLeft(34);
right.addRight(52);
left.left.addLeft(3);
left.left.addRight(11);
left.right.addLeft(17);
left.right.addRight(21);
right.left.addLeft(31);
right.left.addRight(44);
right.right.addLeft(51);
right.right.addRight(54);


console.log(DFSPreOrder(root));
