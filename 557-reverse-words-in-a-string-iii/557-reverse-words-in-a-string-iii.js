/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let final = []
    let words = s.split(" ")
    console.log(words)
    for(let i = 0; i < words.length; i++){
        let letters = words[i].split("")
        for(let o = 0; o < letters.length; o++){
            letters.push(...letters.splice(letters.length - o - 1, 1))
        }
        final.push(letters.join(""))
    }
    return(final.join(" "))
};