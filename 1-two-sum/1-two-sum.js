/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ans = []
    for(let i = 0; i < nums.length; i++){
        for(let o = i + 1; o < nums.length; o++){
            if(nums[i] + nums[o] == target){
                ans = [i, o]
                i = nums.length
            }
        }
    }
    return(ans)
};