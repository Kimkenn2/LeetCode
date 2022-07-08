/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
let prev = 0
let curr = 1

for(let i = 0; i < n; i++){
    curr += prev
    prev = curr - prev
}
    return curr
    
    
//------------------------------
//   let half1 = Math.floor(n/3)
//   let half2 = n%3
  
//   return(half1+half2)
  
  //5 steps:
    // 1*5 || 1*3 + 2 || 2*2 + 1 ==== Total of 3
     //Wrong because you can have duplicates in different order
};