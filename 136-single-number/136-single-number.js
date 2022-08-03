/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    //Input array of nums, the array cannot be empty
    //Output return the num that appears on the array more than one time
    //Ex:  [2,2,1] return 1
    
    //Create a hashmap to store an object
    //Do a loop for with an index of i of the nums
    //If obj does not have anything stored at i position so store 1 if there is something do [i]++ /// Ex: [4,1,2,1,2] >>> { '1': 2, '2': 2, '4': 1 } we see the quantity of each number
    //Do a loop for to check i in obj it has an obj[i] with only one element then return this element on the i position
    
    
    let obj = {};
    
    for(let i of nums){
    if(!obj[i]){
        obj[i] = 1;
    }else{
            obj[i] ++;
        }
    }
    
    for(let i in obj){
        if(obj[i] == 1){
            return i;
        }
    }      
    
};

//BigO: time complexity of O(n) memory complexity of O(n)