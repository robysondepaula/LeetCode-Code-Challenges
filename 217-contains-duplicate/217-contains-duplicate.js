/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate (nums) {
    
    
    
   //Create a space memory
   //Go throug array and see if what i see now, is something that i have seen before 
    //If my number is never seen before, save in space memory
    //If the number does not exists in memory, return true;
    //For loop to walk thorugh the array

    let map = {};
    
    for(let i = 0;  i < nums.length; i ++){
        if(map[nums[i]] === undefined){
            map[nums[i]] = "exists";
        }else{
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
