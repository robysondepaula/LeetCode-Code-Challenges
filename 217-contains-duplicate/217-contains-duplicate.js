/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate (nums) {
    
    //If the size of the array is less than 1 return false; 
    //Do a loop with an index i to go through each element of the array
    //Sort the array ex: get the [1,2,3,1] sort to [ 1, 1, 2, 3 ]
    //Now with [ 1, 1, 2, 3 ] if i === i + return true else false
    //This case 1 === 1 so return true
    
    if (nums.length < 1) return false;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};


//Input array of nums can be sorted, large or small 
//Output true if an element has more then one time else false
//Ex: Input: nums = [1,2,3,1]
//Output: true
//Input: nums = [1,2,3,4]
//Output: false
//Big O : time complexty O(n), memory complexity O(1)
