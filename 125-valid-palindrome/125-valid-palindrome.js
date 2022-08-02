/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    //Input is a aplhanumeric (letters and numbers) Ex:"A man, a plan, a canal: Panama"
    //Ouput true if the string reads the same forward and backward if not false
    
    
    //Check if s is less, equal zero or undefined if it is return false
    //Check if s is string or number, use a regex to exclude special chars and replace no space, if it is not a string, then convert it to string
    //Run the array doing a loop with i as index run half of s if s[i] is different of s.length - i - 1 just return false, otherwise return true;
    
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
};

//BigO time complexity O(n) / memory complexity O(1)