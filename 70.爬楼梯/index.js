var preorderTraversal = function(root) {
    if (!root) return [];
  
    var stack = []  // 栈模拟
      , ans = [];
  
    stack.push(root);
    ans.push(root.val);
  
    while (stack.length) {
      var elem = stack[stack.length - 1];
      if (elem.left) {
        ans.push(elem.left.val);
        stack.push(elem.left);
        elem.left = null;
      } else if (elem.right) {
        ans.push(elem.right.val);
        stack.push(elem.right);
        elem.right = null;
      } else
        stack.pop();
    }
  
    return ans;
  };
