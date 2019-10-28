var trap = function(height) {
    let total = 0;
    if (height.length === 3) {
        let min =  Math.min(height[0],height[2]) 
        if (min <= height[1]) {
            total = 0
        }else {
            return total = min - height[1]
        }
    }
    for (let i = 1 ; i <= height.length - 2; i ++) {
        let start = i-1 , end  = i + 1 ,sum = 0,leftMax = 0,rightMax = 0
        while (start >= 0) {
            leftMax = Math.max(leftMax,height[start])
            start --
        }
        while(end <= height.length - 1) {
            rightMax = Math.max(rightMax,height[end])
            end ++
        }
        let min =  Math.min(leftMax,rightMax)
        if (min <= height[i]) {
            sum = 0
        }else {
            sum = min - height[i]
        }
        total += sum
    }  
    return total
};