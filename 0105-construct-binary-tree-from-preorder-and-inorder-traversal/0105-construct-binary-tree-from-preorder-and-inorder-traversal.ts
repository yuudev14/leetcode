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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (preorder.length === 0 || inorder.length === 0) return null
    
    const root = new TreeNode(preorder[0])
    const mid = inorder.indexOf(preorder[0])
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1))
    return root
    
};