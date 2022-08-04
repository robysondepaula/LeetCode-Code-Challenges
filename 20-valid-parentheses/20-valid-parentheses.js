/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    //Input is a string containing '(', ')', '{', '}', '[' and ']'
    //Output return true if the string is valid Ex: "()[]{}" "()"
    //Output return false if the string is not valid Ex: "(]"
    
    // Create an object to store the characters
    // Create an new empty array to push data
    
    let map = {
        '(':')', 
        '[':']',
        '{':'}'
    }
   
    let stack = [];
    
    for(let char of s){
        if(map[char]){
            stack.push(map[char])
        }else if (stack.length > 0 && stack[stack.length - 1] === char){
            stack.pop();
        }else{
            return false;
        }
    }
    return stack.length === 0;
   
};