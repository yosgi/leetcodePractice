let paths = []
var getPath  = function (m,n) {
    if ( m == 1 || n ==1) {
        return step = 1 
    }
    if (!paths[m] ) {
        paths[m] = []
    }
    if (paths[m][n]) return paths[m][n]
    paths[m] = []
    result = getPath(m-1,n) + getPath(m,n-1)
    paths[m][n] = result
    return result
} 
var uniquePaths = function(m, n) {
    return getPath(m, n)
};
