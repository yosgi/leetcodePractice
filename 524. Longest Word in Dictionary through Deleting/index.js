var findLongestWord = function(s, d) {
  let res = ''
   d.sort((a,b) => {
    return b.charCodeAt() - a.charCodeAt()
  })
  for(let i = 0 ; i < d.length ; i ++) {
    let word = d[i]
    if (word.length < res.length) continue 
    let j = 0 , k = 0;
    while(j < s.length && k < word.length) {
      if (s[j] === word[k]) {
        j++
        k++
      } else {
        j++
      }
    }
    if (k=== word.length) {
      res = word 
    }
  }
  return res
};