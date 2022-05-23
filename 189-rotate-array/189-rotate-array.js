/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let result = [];
    let n;
    
    for (let i = 0; i < nums.length; i++) {
        n = (i + k) % nums.length;
        result[n] = nums[i];
    }
    for (let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }
};