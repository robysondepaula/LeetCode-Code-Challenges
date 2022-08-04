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
    // If s at index i is equal to "(", "[" or "{" do a push to the empty array receinving any of these chars "(", "[" or "{"
    // Check if the arr.length - 1 in this case is "(" is equal to map[s[i]] in this case "(" if it is delete using pop
    // If it is not return false
    // Return true with the arr.length is zero, if not return false
    
 let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    let arr = [];
    
    for(let i = 0; i < s.length; i ++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            arr.push(s[i]);
        }
        else{
            if(arr[arr.length - 1] === map[s[i]]){
                arr.pop();
            }
            else return false;
        }
    }
    return arr.length === 0 ? true : false;
   
};

//Big O: time complexity O(n), memory complexity O(n)