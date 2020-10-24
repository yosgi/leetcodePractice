// 可以观察到，将二维矩阵的行列交换之后，只需要对矩阵的每一行再反转即可
var rotate = function(matrix) {
  if (!matrix.length) return matrix
  let rows = matrix.length
  let cols = matrix[0].length
  for(let i = 0 ; i < rows ; i++) {
      for(let j = i ; j < cols ; j++) {
          [matrix[i][j],matrix[j][i]] =  [matrix[j][i],matrix[i][j]]
      }
  }
  for(let i = 0 ; i < rows; i ++) {
      let l = 0 , r = cols - 1
      while(l < r) {
          [matrix[i][l],matrix[i][r]] =  [matrix[i][r],matrix[i][l]]
          l++
          r--
      }
  }
  return matrix
};