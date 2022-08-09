/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    //Two array with int nums 1 and nums 2
    //Return an array with the numbers that appears at both array ex: Input: nums1 = [1,2,2,1], nums2 = [2,2]Output: [2,2] in any order;
    
 let nums3 = [];
    
 for(let i = 0; i < nums1.length; i ++){
  let val = nums1[i];
     if(nums2.indexOf(val) != -1){
         nums3.push(val);
         nums2[nums2.indexOf(val)] = -1;
     }
 }   
    return nums3;
};

/*let intersect = (num1,num2) =>{
  let arr = [];
    
   for(let i=0;i<num1.length;i++) {
     let val = num1[i];
     if(num2.indexOf(val) != -1) {
        arr.push(val);
        num2[num2.indexOf(val)] = -1;
     }
   }
    
   return arr;
}*/