/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    //Input array of strings can have several strings or no string, only lowercase letters
    //Output find and return he longest common prefix string amongst an array of strings if there is no common prefix return ""
    
    let arr = strs.concat().sort();
    let a1 = arr[0];
    let a2 = arr[arr.length -1];
    let length = a1.length;
    let i = 0;
    
    while(i < length && a1.charAt(i) == a2.charAt(i)) i++;
    return a1.substring(0,i);
    
  
    console.log(a2);
};