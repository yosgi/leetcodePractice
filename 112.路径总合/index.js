/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    var trees = [];
    var walk = function (data,total=0){
      if(!data){
        return 
      }
      else  if(data.left==null&&data.right==null){
           total+=data.val;
          trees.push(total)
        }else{
          total+=data.val;
          walk(data.left,total);
          walk(data.right,total);
        }
    } 
  walk(root)
  console.log(trees)
  if(trees.indexOf(sum)!=-1){
    return true
  }else{
    return false
  }
};