var buildTree = function(preorder, inorder) {
    //根据前序序列的第一个元素建立根节点
    if(inorder == null || preorder == null || preorder.length == 0 || preorder.length == 0){
      return null;
    }
    var rootVal = preorder[0],
    root = new TreeNode(rootVal),
    middleIndex = inorder.indexOf(rootVal);
    //在中序序列中找到该元素，确定根结点的左右子树的中序序列；
    var leftInorder = inorder.splice(0,middleIndex);
    inorder.splice(0,1);
    var rightInorder = inorder;
    //在前序序列中确定左右子树的前序序列；
    var leftLength = leftInorder.length;
    preorder.shift();
    var leftpreorder =  preorder.splice(0,leftLength);
    var rightpreorder = preorder;
    //由左子树的前序序列和中序序列建立左子树；
    root.left = buildTree(leftpreorder,leftInorder)
    root.right = buildTree(rightpreorder,rightInorder)
    return root 
};