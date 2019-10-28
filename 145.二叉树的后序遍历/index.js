var levelOrder = function(root) {
    var tree= [];
    if(!root){
        return tree
    }
    (function walk(node = root,level = 0){
        if(!tree[level]){
            tree[level] = [];
            tree[level].push(node.val)
        }else{
            tree[level].push(node.val)
        }
        if(node.left){
            walk(node.left,level+1)
        }
        if(node.right){
            walk(node.right,level+1)
        }
    })()
    return tree
};