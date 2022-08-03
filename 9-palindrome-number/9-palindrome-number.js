/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    
    //Input integer can be negative, 0, any number
    //Output return true if the number is palindrome Ex: 121, return false it is not palindrome Ex: 123
    
    //Check if the x <= 0 if it is already return false;
  
    if(x < 0 ) return false;
    
    let xString = Number (x.toString().split("").reverse().join(""));
    if(xString === x){
        return true
    }return false;
    console.log(xString);
};