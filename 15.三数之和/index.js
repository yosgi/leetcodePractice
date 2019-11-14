var threeSum = function(nums) {
    let hashMap = {}
    nums = nums.sort((a,b) => {
       return a - b
     })
     let res = []
     for (let i = 0 ; i < nums.length - 2 ; i ++) {
       let start =  i + 1 , end = nums.length -1
       while (start < end) {
         let result = nums[i] + nums[start] + nums[end]
         if (i === start) {
          start++
          break
         }
         if (i === end) {
          end--
          break
         }
         if (result === 0) {
           let str = `${nums[i]}${nums[start]}${nums[end]}`
           if (!hashMap[str]) {
            res.push([nums[i],nums[start],nums[end]])
            hashMap[str] = true
            start ++
           } else{
            start ++
           }
         } else if (result > 0) {
           end--
         } else {
           start++
         }
       }
     }
     return res
  };