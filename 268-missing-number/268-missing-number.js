/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let actualSum = 0
    let trueSum = 0
    for(let i = 0; i < n; i++){
        actualSum += nums[i]
        trueSum += (n - i)
    }
    return(trueSum - actualSum)
};