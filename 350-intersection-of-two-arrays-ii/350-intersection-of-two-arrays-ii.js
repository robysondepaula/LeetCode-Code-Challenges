/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    
    //Two array with int nums 1 and nums 2
    //Return an array with the numbers that appears at both array ex: Input: nums1 = [1,2,2,1], nums2 = [2,2]Output: [2,2] in any order;
    
    //Create a var as nums3 to receive the new array
    //Create a obj as hashmap to save information
    //If the obj does not have anything then obj receive i, otherwise obj ++
    //Do another lop to check if obj[i] is bigger then 0 if is push to salve info at the new arr nums3 and then obj[i] --
   
    
let obj = {};
 let nums3 = [];
    
    for(let i of nums1){
        if(!obj[i]){
            obj[i] = 1
        }else{
            obj[i]++
        }
    }
    
    
    for(let i of nums2){
        if(obj[i] > 0){
            nums3.push(i)
            obj[i] --
        }
    }
    
    return nums3;
};

//Big0 : time complexity O(n) /// memory complxity O(n)