/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    //根据后序序列的最后一个元素建立根结点
    if (inorder == null || postorder == null || postorder.length == 0 || postorder.length == 0) {  
      return null;  
    }  
    var rootVal = postorder[postorder.length-1];
    var root = new TreeNode(rootVal);
    var middleIndex = inorder.indexOf(rootVal);
    //在中序序列中找到该元素，确定根结点的左右子树的中序序列；
    var leftInorder = inorder.splice(0,middleIndex);
    inorder.splice(0,1);
    var rightInorder = inorder;
    //在后序序列中确定左右子树的后序序列；
    var leftLength = leftInorder.length;
    var leftpostorder = postorder.splice(0,leftLength);
    postorder.splice(-1,1);
    var rightpostorder = postorder;
    //由左子树的后序序列和中序序列建立左子树；
    root.left = buildTree(leftInorder,leftpostorder)
    //由右子树的后序序列和中序序列建立右子树。
    root.right = buildTree(rightInorder,rightpostorder)
  
    return root
  
  };