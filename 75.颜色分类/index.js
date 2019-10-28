var simplifyPath = function(path) {
    var pathArray = path.split('/')
    var stack = []
    for (let i = 0 ; i < pathArray.length ; i ++) {
        let path = pathArray[i]
        if (!path || path === '.') {
            continue
        } else if (path ==='..') {
            stack.pop()
        } else {
            stack.push(path)
        }
    }
    return '/'+ stack.join('/')
};