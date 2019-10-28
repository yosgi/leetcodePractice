var merge = function(nums1, m, nums2, n) {
    var nums3 = [...nums1]
    let i = 0 ,j = 0,k = 0;
    while (k < nums1.length && i < m && j < n) {
        if (nums3[i] >= nums2[j]) {
            nums1[k] = nums2[j]
            j++ 
        } else if (nums3[i] < nums2[j]) {
            nums1[k] = nums3[i]
            i++
        }
        k++
    }
    if (i < m ) {
        for(let l = i ; l < m ; l++) {
            nums1[k] = nums3[l]
            k++
        }
    }
    if (j < n) {
        for(let l = j ; l < n ; l++) {
            nums1[k] = nums2[l]
            k++
        }
    }
    return nums1
};