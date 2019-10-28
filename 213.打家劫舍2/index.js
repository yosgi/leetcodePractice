var rob = function(nums) {
    var len = nums.length
    var max = 0,lastMax = 0
    for(let i = 0 ; i < len; i++) {
        if (i === 0) {
            max = nums[i]
            lastMax = nums[i]
        } 
        else if (i === 1) {
            max = Math.max(nums[i],lastMax)
        } else {
            let temp = max
            if (lastMax + nums[i] > max) {
                max = lastMax + nums[i]
            }
            lastMax = temp
        } 
    }
    return max
};