/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate (nums) {
    
    
   // nums = [1,2,3,1]
   // sort the array  to nums = [1,1,2,3] In this case the repeated element will be next to the first, and it will be ascending order, maybe we do not need to walk thrhouh all the arrayt=
   //Go through array and see if what i see now, is something that i have seen before 
    //For loop to walk thorugh the array
    
    console.log(nums);
    nums.sort((a,b)=>{return a - b});
    console.log(nums);
    for(let i = 0; i < nums.length; i ++){
        if(i > 0 && nums[i - 1] === nums[i]) return true;
    }
    return false;

};


//Input array of nums can be sorted, large or small 
//Output true if an element has more then one time else false
//Ex: Input: nums = [1,2,3,1]
//Output: true
//Input: nums = [1,2,3,4]
//Output: false
//Big O : time complexty O(n), memory complexity O(n)
