var isValid = function(s) {
    s = s.replace(' ','')
    let reg = /[(|{|\[]/,res = []
    for(let i = 0 ; i < s.length; i ++) {
        if (reg.test(s[i])) {
            res.push(s[i])
        } else {
            let del = ''
            if (s[i] === ')') {
                del = '('
            }
            if (s[i] === '}') {
                del = '{'
            }
            if (s[i] === ']') {
                del = '['
            }
            if (del === res[res.length -1]) {
                res.pop()
            } else {
                return false
            }
        }
    }
    return res.length === 0
};