var encode = function (num) {
    if(num[0] === '0') return false
    if (Math.floor(num)> 26 || Math.floor(num) <1) {
        return false
    }
    return String.fromCharCode(Math.floor(num) + 64)
  }
  var hash = {
  }
  var numDecodings = function(s) {
    if (s[0] === '0') {
        return 0
    }
   hash[0] = encode(s[0])? 1 : 0
   if (s[1] === '0') {
        hash['1'] =  encode(s[0] + s[1] ) ? 1:0
   } else {
        hash['1'] = encode(s[0] + s[1] ) ? hash[0] + 1 : hash[0]
   }
   for(let i = 2 ; i < s.length ; i ++) {
       if (s[i] === '0') {
         if ( !encode(s[i-1] + s[i])  && !encode(s[i] + s[i + 1])) {
           return 0
         }
        hash[i] = hash[i-2]
       } 
       else if (encode(s[i - 1] + s[i] )) {
           //可以与前一个进行合并
            hash[i] = hash[i-1] + hash[i-2]
       } else {
           // 没办法合并
            hash[i] = hash[i-1]
       }
   }
   return hash[s.length - 1]
  };