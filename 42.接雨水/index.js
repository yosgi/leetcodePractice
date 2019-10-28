/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root){
    return true
  }
  var p = root.left,q = root.right,stack = [];
  stack.push(p);
  stack.push(q);
  while(stack.length>0){
    q = stack.pop();
    p = stack.pop();
    if(q==null&&p==null){
      continue
    }else if(q==null||p==null){
      return false
    }else{
      if(q.val!=p.val){
        return false
      };
      stack.push(p.left);
      stack.push(q.right);
      stack.push(p.right);
      stack.push(q.left);
    }
  }
  return true
};