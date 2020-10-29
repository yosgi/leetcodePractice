var characterReplacement = function(s, k) {
  let hashMap = {}
  let i = 0
  let max = 0
  let long = 0
  for(let  j = 0 ; j < s.length ; j ++) {
    let end = s[j]
    if (!hashMap[end]) {
      hashMap[end] = 0
    }
    hashMap[end]++
    // 这里有个优化，不需要每次都去重新更新max_count。
    // 比如说"AAABCDEDFG" k=2，这个case，一开始A出现3次,max_count=3，但是当指针移到D时发现不行了，要移动left指针了。
    // 此时count['A']-=1，但是不需要把max_count更新为2。
    // 为什么呢？ 
    // 因为根据我们的算法，当max_count和k一定时，区间最大长度也就定了。当我们找到一个max_count之后，
    // 我们就能说我们找到了一个长度为d=max_count+k的合法区间，所以最终答案一定不小于d。所以，当发现继续向右扩展right不合法的时候，
    // 我们不需要不断地右移left，只需要保持区间长度为d向右滑动即可。如果有某个合法区间大于d，一定在某个时刻存在count[t]+1>max_count，
    // 这时再去更新max_count即可。
    long = Math.max(hashMap[end],long)
    // 判断是否满足条件 k + long  >=  j - i + 1 
    // 出现最多的字符 + 可改变字符 大于 区间字符个数
    while(k + long  <  j - i + 1 && i <= j) {
      let front = s[i]
      i++
      hashMap[front]--
    }
    max = Math.max(j - i + 1,max)
  }
  return max
};