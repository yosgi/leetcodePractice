function longestPalindrome(s) {
    let length = s.length;
    let arr = [];
    let max = 0;
    let maxStr = ''
    for(let len  = 1;len <= length; len++) {
        for(let start = 0 ; start< length ; start++ ) {
            let end = start  + len - 1
            if (end >= length) {
                break
            }
            if (!arr[start]) {
                arr[start] = []
            }
            arr[start][end] = (len == 1 || len == 2 && s[start] === s[end]|| arr[start + 1][end - 1] && s[start] === s[end])
            if (arr[start][end] && len >　max) {
                maxStr = s.substring(start,end + 1)
            }
        }
    }
    return maxStr
}
