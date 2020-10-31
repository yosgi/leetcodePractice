// 在数组中找到一个中简单 midlle 
// [0 ... middle] [middle + 1 ... length] 两个区间必然有一个递增和一个非递增
// 然后使用二分法继续处理非递增的区间，最后区间长度为 1 时即为最小值
var findMin = function(nums) {
  // 转转点的最左侧必定是最小值
  let l = 0 , r = nums.length - 1,mid = Math.floor(l+ (r - l ) /2)
  // 需要考虑只有一个元素的数组和没有旋转过的数组
  if (nums[r] > nums[l]) return nums[l]
  if(nums.length === 1) return nums[0]
  while(l <= r) {
      if (nums[mid] < nums[mid -1]) return nums[mid]
      if (nums[mid] > nums[mid + 1]) return nums[mid + 1]
      if (nums[mid] > nums[l]) { //变化点在右侧
          l = mid + 1
      }else  if (nums[mid] < nums[r]) { //变化点在左侧
          r = mid - 1
      }
      mid = Math.floor(l+ (r - l ) /2)
  }
  return -1
};  