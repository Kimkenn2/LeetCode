/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // let fh = []
    // let sh = []
    // for(let i = 0; i < nums.length; i++){
    //     if(i <= nums.length - 1 - k ){
    //         fh = [...fh, nums[i]]
    //     } else if (i > nums.length - 1 - k) {
    //         sh = [...sh, nums[i]]
    //     }
    // }
    // nums = [...sh, ...fh]
    
    nums.push(...nums.splice(0, nums.length - (k % nums.length)))
};