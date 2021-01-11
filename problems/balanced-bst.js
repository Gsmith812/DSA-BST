// Write an algorithm that checks if a BST is balanced (i.e., a tree where 
// no 2 leaves differ in distance from the root by more than 1).

// Returns true or false
const isBalancedBst = bst => {
    // Helper function to find the minimun height of tree
    const _minHeight = node => {
        // Return 0 if last node in tree with no children
        if(node === null) {
            return 0;
        }
        // Otherwise recursively call function for left and right nodes
        return 1 + Math.min(_minHeight(node.left), _minHeight(node.right));
    };
    // Conversely use helper function to find maximum height
    const _maxHeight = node => {
        // Return 0 if last node
        if(node === null) {
            return 0;
        }
        // Another recursive call to search through tree
        return 1 + Math.max(_maxHeight(node.left), _maxHeight(node.right));
    };

    // Return true if BST is empty
    if(bst === null) {
        return true;
    }
    // Subtract max from min and evaluate against <= 1
    return _maxHeight(bst) - _minHeight(bst) <= 1;
}