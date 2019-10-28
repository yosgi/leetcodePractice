var fourSumCount = function(A, B, C, D) {
    let hashMap = {}
    for(let i = 0; i < C.length; i ++) {
        for(let j = 0 ; j < D.length ; j ++) {
            let sum = C[i] + D[j] 
            if (hashMap[sum]) {
                hashMap[sum] +=1
            } else {
                hashMap[sum] = 1
            }
        }
    }
    let count = 0
    for(let i = 0 ; i < A.length; i++ ) {
        for(let j = 0 ; j < B.length ; j ++) {
            let sum = - (A[i] + B[j])
            if (hashMap[sum]) {
                count += hashMap[sum]
            }
        }
    }
    return count
};