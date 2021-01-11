// You are given two arrays which represent two sequences of keys that are 
// used to create two binary search trees. Write a program that will tell 
// whether the two BSTs will be identical or not without actually 
// constructing the tree. You may use another data structure such as an 
// array or a linked list but don't construct the BST. What is the time 
// complexity of your algorithm? E.g., 3, 5, 4, 6, 1, 0, 2 and 
// 3, 1, 5, 2, 4, 6, 0 are two sequences of arrays but will create the exact 
// same BSTs and your program should return true.

const isSameBst = (arr1, arr2) => {
    // Base Cases
    // If arrays aren't same length return false
    if(arr1.length !== arr2.length) return false;
    // If they are empty return true
    if(arr1.length === 0 && arr2.length === 0) return true;
    // If the root value isn't the same return false
    if(arr1[0] !== arr2[0]) return false;

    // Get left and right leaves for each array
    let arr1Left = arr1.filter(i => i < arr1[0]);
    let arr1Right = arr1.filter(i => i > arr1[0]);

    let arr2Left = arr2.filter(i => i < arr2[0]);
    let arr2Right = arr2.filter(i => i > arr2[0]);

    // Recursively call each side of the tree 
    if(!isSameBst(arr1Left, arr2Left)) {
        return false;
    } else if(isSameBst(arr1Right, arr2Right)) {
        return true;
    } else {
        return false;
    }
}

// Example arrays
let arr1 = [3,5,4,6,1,0,2];
let arr2 = [3,1,5,2,4,6,0];

console.log(isSameBst(arr1, arr2)); // Expect true