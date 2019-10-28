var removeDuplicates = function(nums) {
    let j = 0
    for(let i = 0 ; i < nums.length;i++ ) {
        if (nums[i] === nums[j-1] && nums[i] === nums[j-2]) {
            continue
        } else {
            nums[j] = nums[i]
            j++
        }  
    }
    return j
};