/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap (nums,i , j)  {
    [nums[i],nums[j]] = [nums[j],nums[i]]
}
var sortColors = function(nums) {
    // j 追踪0 的右边界，k用来追踪2的左边界
    let j = 0 , i  = 0 ,k = nums.length - 1
    while (i <= k ) {
        if (nums[i] === 0) {
            swap(nums,i,j)
            j++
            i++
        } else if (nums[i] === 2) {
            swap(nums,i,k)
            k--
        } else {
            i++
        }
    }
    return nums
};