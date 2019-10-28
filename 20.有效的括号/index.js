function isValid(s) {
    let result = (s >= 'A'&&s <= 'Z') || (s >= 'a'&&s <= 'z') || (s >= '0'&& s <= '9')
    return result
}
var isPalindrome = function(s) {
    let i = 0 ,j = s.length - 1
    while(i < j) {
        while (!isValid(s[i]) && i < j) {
            i++
        }
        while (!isValid(s[j]) && i < j){
            j--
        }
        if (typeof s[i] === 'string' && typeof s[j] === 'string') {
            if ( s[i].toLowerCase() ===  s[j].toLowerCase()) {
                i++
                j--
            } else {
                return false
            }
        }
       else if (s[i] === s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
};