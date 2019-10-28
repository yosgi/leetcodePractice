/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
      return 0
    }
    var depNumber = 1 ;
    dep(root,1)
    function dep(data,depth){
        depth>depNumber?depNumber=depth:"";
        if(data.left){
          dep(data.left,depth+1)
        }
        if(data.right){
          dep(data.right,depth+1)
        }
      }
      return depNumber
  };
  