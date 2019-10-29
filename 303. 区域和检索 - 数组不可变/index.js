var NumArray = function(nums) {
    // sums[i + 1] 是 0 到 i 的 积累和 
    this.sums = []
    this.sums[0] = 0
    for(let i = 0 ; i < nums.length ; i ++) {
        this.sums[i + 1]  =  this.sums[i] + nums[i]
    }
};

NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j + 1] - this.sums[i];
};
