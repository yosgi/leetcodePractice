var longestOnes = function(A, K) {
  // 可以看作是最大K个0 的滑动窗口问题
    let zeroCount = 0
    let start = 0,max = 0
    for(let end = 0 ; end < A.length ;end ++) {
      if (A[end] === 0) zeroCount++
      while( start <= end && zeroCount > K) {
        if (A [start] === 0 ) zeroCount --
        start ++  
      }
      max= Math.max(max,end - start + 1)
    }
    return max
};