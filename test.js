//暴力解
function isUnique (s,start,end) {
    let hash = {}
    for(let i = start; i <= end ; i ++) {  
        let item = s[i]
        if (hash[item] === true) {
            return false
        }
        hash[item] = true
    }
    return true
}
var lengthOfLongestSubstring = function(s) {
    let len = s.length - 1
    var maxLength = 0
    for(let i = 0; i <= len ; i++) {
        for(let j = i ; j <= len ; j++) {
            let result = isUnique(s,i,j)
            if (result) {
                maxLength = Math.max(maxLength,j - i + 1)
            } else {
                break
            }
        }
    }
    return maxLength
};


// 双指针
var lengthOfLongestSubstring = function(s) {
    let len = s.length
    let hash = {}
    let start  = 0,end = 0
    let ans = 0
    for (let i = 0; i < len; i ++) {
        let cur = s[i]
        if (hash[cur]) {
             start=Math.max(hash[cur],start)
        } 
           
        hash[cur] = i +1
        ans =  Math.max(end - start +1, ans)
        end += 1
    }
    return ans
};
