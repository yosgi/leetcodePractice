function convert(str = 'LEETCODEISHIRING', numRows = 3) {
    // flag 控制方向，向下是true向上是false
    // rowNum 控制数组的位置
    let array = []
    let flag = true, rowNum = 0
    for(let i = 0;i < str.length ; i++) {
        if (!array[rowNum]) array[rowNum] = []
        array[rowNum].push(str[i])
        if (flag) {
            rowNum ++
        }  else {
            rowNum --
        }
        if ((i + 1) % (numRows - 1) === 0) {
            flag = !flag
        }
    }
    let result = []
    array.forEach(arr => result = result.concat(arr))
    return result.join('')
}
convert()