/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// Export hack to avoid circular dependency issues
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    // Conditions
    if (root === null)
        return root

    if (root.val > 100 || root.val < -100)
        throw new Error('Values not within exercise constraints.')
    
    if (root.left !== null && (root.left.val > 100 || root.left.val < -100))
        throw new Error('Values not within exercise constraints.')

    if (root.right !== null && (root.right.val > 100 || root.right.val < -100))
        throw new Error('Values not within exercise constraints.')

    // Logic
    const a = root.left
    root.left = root.right
    root.right = a
    invertTree(root.left)
    invertTree(root.right)
    
    // Return statement
    return root
};


const treenode = new TreeNode(1, new TreeNode(2))
console.log(invertTree(treenode));
