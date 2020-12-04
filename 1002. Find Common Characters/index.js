var commonChars = function(A) {
    let hashMap = new Array(26).fill(0)
    let res = []
    for(let i = 0 ; i < A.length ; i ++) {
        let s = A[i]
        let sMap = new Array(26).fill(0)
        for(let j = 0 ; j < s.length ; j ++) {
            let str = A[i][j]
            sMap[str.charCodeAt() - 'a'.charCodeAt()] ++
        }
        if (i === 0) {
            hashMap = sMap
        } else {
            for(let i = 0 ; i < sMap.length ; i ++) {
                hashMap[i] = Math.min(hashMap[i],sMap[i])
            }
        }
    }
    for(let i = 0 ; i < hashMap.length ; i ++ ) {
        let str = String.fromCharCode('a'.charCodeAt() + i )
        if (hashMap[i] > 0) {
            res = res.concat(new Array(hashMap[i]).fill(str))
        }
    }
    return res
};