var inorderTraversal = function (root) {
    var tree = [],stack = [];
    if(!root){ return tree}
    stack.push(root);
    while(stack.length>0){
        var ele = stack[stack.length-1];
        if(ele.left){
            stack.push(ele.left)
            ele.left = null;
        }else if(!ele.left&&ele.right){
            tree.push(ele.val)
            var pop = stack.pop()
            stack.push(pop.right)
        }else {
            tree.push(ele.val)
            stack.pop()
        }
    }
    return tree
}