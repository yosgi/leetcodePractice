var maxArea = function (height) {
    let max = 0 
    for(let i = 0 ;i < height.length ; i++) {
        for (let j = 0 ; j < height.length ; j ++) {
            let x = Math.max(i,j) - Math.min(i,j)
            let y  = Math.min(height[i],height[j])
            let area = x * y
            max = Math.max(area,max)
        }
    }
    return max
}