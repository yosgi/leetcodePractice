/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
      return 0
    }
    let len = haystack.length
    let start = -1
    outer:
    for (let i = 0 ; i < len ; i ++) {
      if (haystack[i] === needle[0]) {
        let j = 1,k = i + 1
        while(j < needle.length) {
          if (haystack[k]!= needle[j] ) {
            continue outer
          }
          j++
          k++
        }
        return  i
      }
    }  
    return start
  };