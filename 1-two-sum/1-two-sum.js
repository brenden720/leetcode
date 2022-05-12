/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        let char = nums[i];
        if (hash[target - char] !== undefined) {
            return [hash[target - char], i]
        } else {
            hash[char] = i;
        }
    }
    return [];
};