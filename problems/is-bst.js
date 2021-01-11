// Write an algorithm to check whether an arbitrary binary tree is a binary 
// search tree, assuming the tree does not contain duplicates.

const isBst = bst => {
    // If root node is only node
    if(!bst.left && !bst.right) {
        return true;
    }
    // If left exists check its value with the root, if less than root run recursively
    if(bst.left) {
        if(bst.left.value >= bst.value) {
            return false;
        }
        isBst(bst.left);
    }
    // Same for the right only greater than
    if(bst.right) {
        if(bst.right.value <= bst.value) {
            return false;
        }
        isBst(bst.right);
    }

    return true;
}