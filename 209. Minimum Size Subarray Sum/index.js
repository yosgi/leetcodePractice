var minSubArrayLen = function(s, nums) {
  let start = 0
  let total = 0 , min = Infinity
  // 考察[start ... end] 区间是否 >= s 
  for(let end = 0 ; end < nums.length ; end ++) {
    total += nums[end]    
    while(total >= s) {
      let count = end - start + 1
      min = Math.min(count,min)
      total -= nums[start++]
    }
  }
  return min
};