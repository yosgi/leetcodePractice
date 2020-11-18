var flatten = function(root) {
  if (!root) return null
  let pre = null
  // 后序遍历的改写，原因是因为如果是前序遍历，在原地做交换，指针会丢失
    let helper = function (node) {
      node.right && helper(node.right)
      node.left && helper(node.left)
      // 走到7， 此时没有pre, 把 7 设为 pre
      // 走到 6 ，把 7 放在 6 的右节点,把 6 设为pre
      //  走到5 , 把 6 设为 pre
      if (pre) {
        node.right = pre
      }
      pre = node
      node.left = null
    }
    helper(root)
    return root
};