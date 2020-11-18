var circularArrayLoop = function(nums) {
  if (!nums.length) return false
  var cal = function (index,step) {
      let len = nums.length
      if (step > 0) {
          return (index + step) % len
      } else {
          return (step % len) + index < 0 ? (step % len) + index + len : (step % len) + index
      }
  }
  for(let i = 0 ; i < nums.length ; i ++) {
      let slow = i , quick = i,result = false;let flag = nums[quick]
      // 快指针每次走一步，慢指针每次走
      // 符号不能转变
      // 快指针知道是否环的长度为1
      do {
          result  = true
          if (cal(quick,nums[quick]) === cal(cal(quick,nums[quick]),nums[cal(quick,nums[quick])])) {
              result = false
              break
          }
          if ( flag  * nums[cal(quick,nums[quick])] < 0 ||flag *  nums[cal(cal(quick,nums[quick]),nums[cal(quick,nums[quick])])] < 0 ) {
              result = false
              break
          } else {
              flag = nums[cal(slow,nums[slow])]
          }
          slow = cal(slow,nums[slow])
          quick = cal(cal(quick,nums[quick]),nums[cal(quick,nums[quick])])
          
      } while (slow !== quick)
      if (result) return result 
  }
  return false
};