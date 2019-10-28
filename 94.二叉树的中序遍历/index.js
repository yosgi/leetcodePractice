var maxProfit = function(prices) {
    // 暴力解
    let max = 0,len = prices.length
    for(let i = len - 1; i >=0; i --){
        for(let j = i - 1 ; j >=0 ;j --){
            max = Math.max(prices[i] - prices[j],max)
        }
    }
    return max
};