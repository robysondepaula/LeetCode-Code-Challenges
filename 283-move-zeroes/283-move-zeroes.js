/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
   
    
    
   
/*Create an index to run the array i receives the last position -1 to not get undefined
  where i bigger or equal to zero runs i -- Ex:[0,1,0,3,12] >>>>>[12,3,0,1,0]
  Then push (add to the last position of the array all 0 elements)
    [ 0, 1, 0, 3, 12, 0 ] >>> [ 0, 1, 3, 12, 0 ]
    
    [ 0, 1, 3, 12, 0 ] >>>    [ 0, 1, 3, 12, 0, 0 ]
    
    [ 0, 1, 3, 12, 0, 0 ] >>> [ 1, 3, 12, 0, 0 ]

*/
    for(let i = nums.length - 1; i >= 0 ; i --){
        if(nums[i] === 0){
            nums.push(0);
            nums.splice(i, 1); 
        }
    }
     return nums;   
};


//Input array nums this array can have sorted elements and can be larger or smaller
//Move all the 0 elements to the end of the array
//Maintain the order of the other numbers
//Ex: 
// Input: nums = [0,1,0,3,12] >>>>> Output: [1,3,12,0,0]