// DFS 向下找到包含p 或者 q 的值， 如果一个节点同时包含p 和 q 节点，这个节点就是最小公共节点
// 另外一种情况是本身就是p且包含q的情况
var lowestCommonAncestor = function(root, p, q) {
  let res = null
  let contains = function (node) {
      if (node === null) {
          return false
      }
      let left = contains(node.left)
      let right = contains(node.right)
      if (left && right) {
          res = node
      } 
      if (node == p || node == q) {
          if (left || right) res = node
      } 
      return left || right || node ===p || node ===q
  }
  contains(root)
  return res
};