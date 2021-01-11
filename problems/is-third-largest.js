// Write an algorithm to find the 3rd largest node in a binary search tree.

const isThirdLargestNode = bst => {
    // Set array to store our values
    const results = [];
    // Create helper function to search through the nodes
    const _moveThroughTree = node => {
        if(node.left) {
            _moveThroughTree(node.left);
        }
        // push current node value to array
        results.push(node.value);

        if(node.right) {
            _moveThroughTree(node.right);
        }
    };
    // Run our helper function against BST
    _moveThroughTree(bst);
    // If length of tree is over 3 return value
    if(results.length >= 3) {
        return results[results.length - 3];
    } else {
        return `Less than 3 nodes in tree`;
    }
}