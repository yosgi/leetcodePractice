var hashMap = []
var total = function(grid,m,n) {
    let result = 0
    if (m === 0 ) {
        if (!hashMap[0]) {
            hashMap[0] = []
        }
        // if (hashMap[0][n]) {
        //     return hashMap[0][n]
        // }
        for(let i = 0 ; i < n ; i++) {
            result += grid[0][i]
            hashMap[0][i] = result
        }
        return result
    }
    if (n === 0) {
        if (!hashMap[m]) {
            return hashMap[m] = []
        }
        if (hashMap[m][0]) {
            return hashMap[m][0]
        }
        for (let i = 0 ; i < m ; i ++) {
            result += grid[i][0]
            // if (!hashMap[i]) {
            //     hashMap[i] = []
            // } else {
            //     hashMap[i][0] = result
            // }
        }
        return result
    }
    return result = Math.min(total(grid,m-1,n),total(grid,m,n-1)) + grid[m][n]
}
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length,result = 0
    result = total(grid,m - 1,n - 1)
    return result
};
minPathSum([[1,3,1],[1,5,1],[4,2,1]])