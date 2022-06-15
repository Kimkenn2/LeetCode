/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i = 0; i < s.length; i++){
        s.push(...s.splice(s.length-i-1, 1))
    }
};