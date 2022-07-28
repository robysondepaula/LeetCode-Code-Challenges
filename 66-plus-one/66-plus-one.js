/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
     let value = BigInt(digits.join(''));
     value++;
     return value.toString().split('').map((x)=> parseInt(x));
   

        
};

