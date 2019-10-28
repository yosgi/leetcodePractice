var climbStairs = function(n) {
    let aux = []
    for(let i = 1; i<=n; i ++) {
        if (i === 1|| i ===2) {
            aux[i] = i
        }
        else {
            aux[i] =  aux[i-1] + aux[i-2]
        } 
    }
    return aux[n]
};