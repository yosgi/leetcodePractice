var postorderTraversal = function (root) {
    var tree = [],stack = [];
    if(!root){ return tree}
    stack.push(root);
    while(stack.length>0){
        var ele = stack[stack.length-1];
        if(ele.left){
            stack.push(ele.left)
            ele.left = null;
        }else if(!ele.left&&ele.right){
            stack.push(ele.right)
            ele.right = null

        }else{
            var item = stack.pop()
            tree.push(item.val)
        }
    }
    return tree
}
