var removeElement = function(nums, val) {
    let dif = 0
    for(let i = 0 ; i < nums.length; i ++) {
        if(nums[i]!==val) {
            nums[dif] = nums[i]
            dif++
        }
    }
    nums.length = dif
    return dif
};