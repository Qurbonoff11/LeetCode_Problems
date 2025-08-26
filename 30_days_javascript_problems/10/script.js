var once = function(fn) {

    let obj = {calls: 1, val: fn}

    return function(...args){
        if(obj.calls === 1){
            obj.val = fn(...args)
            obj.calls = 0
            return obj.val
        }
        return undefined
    }
};