/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
      // sort the array and the middle is the majority
    nums.sort((a,b) => a - b);
   
    return nums[Math.floor(nums.length/2)];
};

//BigO: time complexity O(1), memory complexity O(1)