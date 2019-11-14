var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => {
        return a -b
    })  
    var reduce  = Infinity,res = ''
    for(let i = 0;i < nums.length - 2; i ++) {
        var start = i + 1, end = nums.length - 1
        while(start < end ){
            let result = nums[i] + nums[start] + nums[end] 
            if (Math.abs(result - target) < reduce) {
                res =  result
                reduce = Math.abs(result - target)
            }
            if ( result > target) {
                end --
            } else if (result < target) {
                start ++
            } else {
                return target
            }
        }
        console.log(start,end,i)
    }
    return res
};