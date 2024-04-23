/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueSet = new Set(nums);

    nums.splice(0, nums.length, ...uniqueSet);

    return uniqueSet.size;
};
