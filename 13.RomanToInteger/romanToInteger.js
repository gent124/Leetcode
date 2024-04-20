/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = '';
for (let i = 0; i < strs[0].length; i++) {
  const char = strs[0].charAt(i);
  if (strs.every(str => str.charAt(i) === char)) {
    prefix += char;
  } else {
    break;
  }
}
return prefix
};