var Window = function(t) {
    this.contains = {}
    this.needs = {}
    this.match = 0
    for (let i = 0 ; i < t.length; i++) {
      let s1 = t[i]
      if (this.needs[s1]) {
        this.needs[s1] ++
      } else {
        this.needs[s1] = 1
      }
    }
  }
  Window.prototype.add = function(s1) {
    if (this.needs[s1]) {
      if (this.contains[s1]) {
        this.contains[s1] ++
      } else {
        this.contains[s1] = 1
      }
      if (this.needs[s1] === this.contains[s1]) {
        this.match ++
      }
    }
    
  }
  Window.prototype.isContain = function () {
    return this.match === Object.keys(this.needs).length
  }
  Window.prototype.moveLeft = function (s1) {
    if (this.needs[s1]) {
      if (this.contains[s1]) {
        this.contains[s1] --
        if (this.contains[s1] < this.needs[s1]) {
          this.match --
        }
      }
    }
  }
  var findAnagrams = function(s, t) {
    let left = 0 ;
    let right = 0;
    let myWindow = new Window(t);
    let res = []
    while (right < s.length && right >= left) {
        myWindow.add(s[right])
        right++
        while(myWindow.isContain())  {
          if (right - left === t.length) {
            res.push(left)
          }
            myWindow.moveLeft(s[left])
            left ++
        }
    }
    return res
  };