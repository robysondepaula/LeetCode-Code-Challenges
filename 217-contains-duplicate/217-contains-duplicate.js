/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    console.log(nums);
    
    //For loop use index i to walk all the array
    //For loop use index j + 1 to walk the array

 for (let i = 0; i < nums.length; ++ i) {
        for (let j = 0; j < i; ++ j) {
            if (nums[i] == nums[j]) {
                return true;
            }
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
