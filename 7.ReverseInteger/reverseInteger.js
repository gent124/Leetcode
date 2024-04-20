/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const reversedString = Math.abs(x).toString().split('').reverse().join('');
     const reversedInt = parseInt(reversedString) * Math.sign(x);
 
  if (reversedInt < Math.pow(-2, 31) || reversedInt > Math.pow(2, 31) - 1) {
         return 0;
     }
     return reversedInt;
 };