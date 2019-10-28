var Window = function(t) {
    this.data = {}
    this.strMap = {}
    this.match = 0
    for (let i = 0 ; i < t.length; i++) {
      if (this.strMap[t[i]]) {
        this.strMap[t[i]] ++
      } else {
        this.strMap[t[i]] = 1
      }
    }
  }
  Window.prototype.add = function(s1) {
    if (this.strMap[s1]) {
      if (this.data[s1]) {
        this.data[s1] ++
      }else {
        this.data[s1] = 1
      }
      if (this.strMap[s1] === this.data[s1]) {
        this.match ++
      }
    }
  }
  Window.prototype.isContain = function () {
    return this.match === Object.keys(this.strMap).length
  }
  Window.prototype.moveLeft = function (s1) {
    if (this.strMap[s1]) {
      if (this.data[s1]) {
        this.data[s1] --
        if (this.data[s1] < this.strMap[s1]) {
          this.match --
        }
      }
    }
  }
  var minWindow = function(s, t) {
    let left = 0 ;
    let right = 0;
    let len = '';
    let myWindow = new Window(t);
    let res = ''
    while (right < s.length && right >= left) {
        myWindow.add(s[right])
        right++
        while(myWindow.isContain())  {
            if( right - left < len || !len) {
                res = s.substring(left,right)
                len = right - left
            }
            myWindow.moveLeft(s[left])
            left ++
        }
    }
    return res
  };