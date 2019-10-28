var coinChange = function(coins, amount,hash = []) {
    if (amount === 0 ) return 0
    let ans = Infinity
    for (let i = 0 ; i < coins.length ; i++) {
        let coin = coins[i]
        if (amount < coin ) continue
        let left = amount - coin
        let sub
        if (hash[left]) {
            sub = hash[left]
        } else {
            sub = coinChange(coins, left,hash)
            hash[left] = sub
        }
        if (sub === -1) continue
        ans = Math.min(ans,sub + 1)
    }
    return ans == Infinity? -1 :ans
};