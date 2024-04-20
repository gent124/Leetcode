/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if(nums.length < 2 || nums.length > 10000) {
      return
  }
  for(let i =0; i < nums.length; i++) {
      for(let y = i + 1; y < nums.length; y++) {
          if(nums[i] + nums[y] == target){
             return [i, y]
          }
      }
  }
};
