// Walk through the binary search tree code in the curriculum and understand 
// it well. Then write a BinarySearchTree class with its core functions 
// (insert(), remove(), find()) from scratch.

// Create a binary search tree called BST and insert 3,1,4,6,9,2,5,7 into 
// your tree. Compare your result with the result from the 1st exercise.
// Create a binary search tree called BST and insert E A S Y Q U E S T I O N 
// into your tree. Compare your result with the result from the 1st exercise.

class BinarySearchTree {
    constructor(
        key = null,
        value = null,
        parent = null
    ) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.left = null;
        this.right = null;
    };

    // Add items to binary tree
    add(key, value) {
        // Check if binary tree is empty
        if(this.key === null) {
            this.key = key;
            this.value = value;
        } else if(key < this.key) {
            // If key is less than root move left
            if(this.left === null) {
                // If no value exists insert
                this.left = new BinarySearchTree(key, value, this);
            } else {
                // If node exists then call add again recursively
                this.left.add(key, value);
            }
        } else {
            // Do the same if its greater than the root
            if(this.right === null) {
                this.right = new BinarySearchTree(key, value, this);
            } else {
                // Else we will recursively call the add method on the right node
                this.right.add(key, value);
            }
        }
    }

    // Find an item in the binary tree
    find(key) {
        // Check if the item is at the root
        if(this.key === key) {
            return this.value;
        }

        // If the item is less than the root and left node exists move left
        else if(key < this.key && this.left) {
            return this.left.find(key);
        }
        // If the item is greater than the root and right node exists move right
        else if(key > this.key && this.right) {
            return  this.right.find(key);
        }

        // If item not found throw error
        else {
            throw new Error('Key error');
        }
    }

    // Delete an item in the tree
    remove(key) {
        // Check if item is the root of the tree
        if(this.key === key) {
            // Check to see if the tree has children and if so how many
            if(this.left && this.right) {
                // If both children exist find minimun value to right of tree
                const successor = this.right._findMin();
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key);
            } else if(this.left) {
                // If only the left child exists
                this._replaceWith(this.left);
            } else if(this.right) {
                // If only the right child exists
                this._replaceWith(this.right);
            } else {
                // If no children exist, just remove the node
                this._replaceWith(null);
            }
        }
        // Check if search should go left or right in the tree
        else if(key < this.key && this.left) {
            this.left.remove(key);
        } else if(key > this.key && this.right) {
            this.right.remove(key);
        }
        // If no item with matching key is found throw error
        else {
            throw new Error('Key error');
        }
    }

    // Helper function to replace a node
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node;
            } else if(this == this.parent.right) {
                this.parent.right = node;
            }
            if(node) {
                node.parent = this.parent;
            }
        } else {
            if(node) {
                this.key = node.key;
                this.value = node.value;
                this.left = node.left;
                this.right = node.right;
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }

    // Helper function to find the minimum value in the right tree
    _findMin() {
        if(!this.right) {
            return this;
        }
        return this.right._findMin();
    }
}

module.exports = BinarySearchTree;