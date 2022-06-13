/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString()
    let split = string.split('')
    let p = ''
    
    for(let i = split.length-1; i > -1; i--){
        p = p + split[i]
        // console.log(p)
    }
    // console.log(p, x)
    if(Number(p) == x){
        return(true)
    } else {
        return(false)
    }
};