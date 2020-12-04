
// 打印方向	1. 根据边界打印	2. 边界向内收缩	3. 是否打印完毕
// 从左向右	左边界l ，右边界 r	上边界 t 加 1	是否 t > b
// 从上向下	上边界 t ，下边界b	右边界 r 减 1	是否 l > r
// 从右向左	右边界 r ，左边界l	下边界 b 减 1	是否 t > b
// 从下向上	下边界 b ，上边界t	左边界 l 加 1	是否 l > r
var spiralOrder = function(matrix) {
    let l = t = 0
    if (!matrix.length) return []
    let b = matrix.length - 1
    let r = matrix[0].length - 1
    let res = []
    while (true) {
        for(let i = l ; i <= r ; i ++ ) {
            res.push(matrix[t][i])
        }
        t++
        if (t > b) break
        for(let i = t ; i <= b; i ++ ) {
            res.push(matrix[i][r])
        }
        r--
        if(l > r) break 
        for(let i = r ; i >= l ; i--) {
            res.push(matrix[b][i])
        }
        b--
        if(t > b) break
        for(let i = b ; i >= t ; i--) {
            res.push(matrix[i][l])
        }
        l++
        if (l > r) break
    }
    return res
};

// [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：
// [1,2,3,7,11,10,9,5,6]
// 预期结果：
// [1,2,3,4,8,12,11,10,9,5,6,7]