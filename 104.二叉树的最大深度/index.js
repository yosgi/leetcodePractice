var lengthOfLongestSubstring = function(s) {
  let len = s.length
  let hash = {}
  let start  = 0,end = 0
  let ans = 0
  for (let i = 0; i < len; i ++) {
      let cur = s[i]
      if (hash[cur] || hash[cur] === 0) {
        // 因为这个数可能不是第一次重复，也可能后面存在其他重复，则比start小
           start = Math.max(hash[cur] + 1,start)
      } 
      hash[cur] = i 
      ans =  Math.max(i - start +1, ans)
  }
  return ans
};