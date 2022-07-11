/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    function removeLetter(input){
        let arr = input.split('')
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === "#"){
                if(i == 0){
                    arr.splice(i, 1)
                    i = i - 1
                } else {
                arr.splice(i-1, 2)
                i = i - 2
                // console.log(arr)
                }
            }
        }
        // console.log(arr.join(''))
        return arr.join('')
    }
    console.log(removeLetter(s))
    console.log(removeLetter(t))
    return(removeLetter(s) === removeLetter(t))
};