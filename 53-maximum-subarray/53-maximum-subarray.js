/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let previous = 0
    let max = -Number.MAX_VALUE;
    
    for(let i = 0; i < nums.length; i++){
        previous = Math.max(previous + nums[i], nums[i])
        max = Math.max(max, previous)
        
    }
    return max
};