var fourSum = function(nums, target) {
    const len = nums.length;
    nums = nums.sort((a,b) => {
      return a- b
    })
    var res = []
    // 固定的 a,b 在左边
    // 移动的双指针j, k 
      for(let a = 0 ; a < len - 3; a ++) {
        // 这边不清楚 固定指针的右边界是否有 影响， 有待于 验证
        if (a != 0 && nums[a] == nums[a-1]) {
            continue;
        }
        for(let b = a + 1 ; b < len - 2; b ++) {
          if (b != a + 1 &&nums[b] === nums[b-1]) {
            continue
          }
          let j = b + 1, k = len -1
          while(j < k ){
            let total = nums[a] + nums[b] + nums[j] + nums[k]
              if (total === target) {
                res.push([nums[a],nums[b],nums[j],nums[k]])
                while(j < k && nums [j+1] === nums[j])
                j++
                while(j < k && nums[k-1] === nums[k])
                k--
  
                j++
                k--
              } else if (total > target) {
                k --
              } else {
                j++
              }
          }
        }
      }
      return res
  };