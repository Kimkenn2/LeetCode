/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let chars = s.split("")
    // let found = false
    // function filter(i){
    //     return chars.filter(char => char == chars[i])
    // }
    // for(let i = 0; i < chars.length; i++){
    //     console.log(i)
    //     if(filter(i).length <= 1 && found === false){
    //         return i
    //         found = true
    //     } else if(found === false){
    //         return -1
    //     }
    // }
  for(i=0; i<s.length; i++)
        if(s.indexOf(s[i])===s.lastIndexOf(s[i])) return i
    return -1
};