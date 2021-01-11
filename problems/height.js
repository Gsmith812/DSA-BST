// Write an algorithm to find the height of a binary search tree. What is the
// time complexity of your algorithm?

// The time complexity of this algorithm is linear O(n)

const findHeight = (bst, height = 0) => {
    // If BST is empty
    if(bst === null) {
        return 0;
    } else {
        // Find the height for each side
        let leftHeight = findHeight(bst.left);
        let rightHeight = findHeight(bst.right);

        // Return the greater height plus 1 to account for the root node
        if(leftHeight > rightHeight) {
            return leftHeight + 1;
        } else {
            return rightHeight + 1;
        }
    }
}