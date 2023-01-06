/* 
DFS 
  Depth first search is an algorithm for traversing or searching tree or graph data structures.
  The alogrithm starts at the root node and explores as far as possible along each branch 
  before backtracking. To avoid processing a node more than once, use a boolean visited array.
  The algorithm is recursive, but can be implemented iteratively using a stack. 
*/

class TreeNode {
  label: number;
  data: number;

  /**
   * Create an instance of TreeNode.
   * @param {number} label
   * @param {number} data
   */

  constructor(label: number, data: number) {
    this.label = label;
    this.data = data;
  }
}

class Tree {
  // the root node of the tree (start)
  root: TreeNode;
  // We use adjacency list to for BFS/DFS, we keep only the labels here
  // not the actual nodes
  adjacencies: number[][];
  // array of the nodes in the tree
  nodes: TreeNode[];
  // Allow a node to be connected with itself, cyclic graph
  allowCyclic: boolean;

  constructor(rootValue: number, allowCyclic: boolean = false) {
    this.root = new TreeNode(0, rootValue);
    this.adjacencies = [];
    this.adjacencies[0] = [];
    this.nodes = [];
    this.allowCyclic = allowCyclic;
  }

  /**
   * Add a node to the tree
   * @param {number} value
   * @returns void
   */

  addNode(node: TreeNode): void {
    this.adjacencies[node.label] = [];
    this.nodes.push(node);
  }

  /**
   * Sets a connection between two nodes
   * @param {number} node1Label - label of the first node
   * @param {number} node2Label - label of the second node
   */

  setConnection(node1Label: number, node2Label: number) {
    if (!this.allowCyclic && node1Label === node2Label) {
      throw new Error("Cyclic graph not allowed");
    }
    this.adjacencies[node1Label].push(node2Label);
  }

  /**
   * Depth first search
   * @param {Function} [cb] - callback function to be called on each node
   */

  dfs(cb?: Function): number[] | undefined {
    const visitedNodes: number[] = [];
    let nodesToProcess: number[] = [0];

    while (nodesToProcess.length) {
      let node = nodesToProcess.shift();

      // process the node if there is a callback
      if (cb) {
        const result = cb(node, visitedNodes, nodesToProcess);
        if (result === true) {
          break;
        }

        if (!(visitedNodes.indexOf(node as number) > -1)) {
          visitedNodes.push(node as number);

          if (!this.adjacencies[node as number]) {
            continue;
          }

          nodesToProcess =
            this.adjacencies[node as number].concat(nodesToProcess);
        }
      }

      // if there is no callback, just return the visited nodes
      return visitedNodes;
    }

    return visitedNodes;
  }
  
}
const tree = new Tree(100);
const node1 = new TreeNode(1, 99);
const node2 = new TreeNode(2, 3);
const node3 = new TreeNode(3, 19);
const node4 = new TreeNode(4, -20);
const node5 = new TreeNode(5, 33);
const node6 = new TreeNode(6, 3663);
const node7 = new TreeNode(7, 3663);
const node8 = new TreeNode(8, 3663);
const node9 = new TreeNode(9, 3663);
tree.addNode(node1);
tree.addNode(node2);
tree.addNode(node3);
tree.addNode(node4);
tree.addNode(node5);
tree.addNode(node6);
tree.addNode(node7);
tree.addNode(node8);
tree.addNode(node9);
tree.setConnection(0, 1);
tree.setConnection(0, 2);
tree.setConnection(2, 6);
tree.setConnection(1, 3);
tree.setConnection(1, 4);
tree.setConnection(1, 5);
tree.setConnection(3, 7);
tree.setConnection(4, 8);
tree.setConnection(4, 9);

console.assert(
  JSON.stringify(tree.dfs) === "[0,1,3,7,4,8,9,5,2,6]",
  "DFS Wrong Implementation"
);
