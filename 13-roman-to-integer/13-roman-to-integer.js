/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Roman numerals I, V, X, L, C, D and M
    //Input roman numeral
    //Output convert the roman numeral to integer Ex: Input: s = "III", Output: 3, Explanation: III = 3.
    
    const map = {I : 1, V : 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    
    let intNum = 0;
    
    s.split('').forEach((num, i) =>{
       if(map[num] < map[s[i + 1]]) intNum -= map[num];
        else intNum += map[num];
    });
    
    return intNum;
};