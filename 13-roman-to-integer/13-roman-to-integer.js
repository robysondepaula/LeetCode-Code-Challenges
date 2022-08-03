/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //Roman numerals I, V, X, L, C, D and M
    //Input roman numeral
    //Output convert the roman numeral to integer Ex: Input: s = "III", Output: 3, Explanation: III = 3.
    //Pattern if num after the num is bigger than the num at left sum the number, else minus 
    //EX : LVIII=58 >>> L =50 , V =5, III =3 >>> L=50 is bigger than V=5 >>> L 50 + V=5 >>> V = 5 is bigger than III=3 >>> V =5 + III=3 ----- L+V+III = 58.
    //EX : IX =9 >>>> I =1 , X=10 >>>>> I=1 is smaller than X=10 >>>> I=1 - X=10 ------- IX = 9
    
    //Store the letters at map each one with it value
    //Create a variable intNum to return the result
    //Split the s into an array and forEach passing num to first position and i to second check it
    //If num < s[i+1] Ex: I=1 V=5 IV I < V Then return intNum -= map[num]
    //Else intNum += map[num]
    
    const map = {I : 1, V : 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    
    let intNum = 0;
    
    s.split('').forEach((num, i) =>{
       if(map[num] < map[s[i + 1]]) intNum -= map[num];
        else intNum += map[num];
    });
    
    return intNum;
};