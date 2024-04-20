/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length < 0 || s.length > 10000) {
        return false; 
    }

    const stack = [];
    const mapping = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if (stack.length === 0 || mapping[stack.pop()] !== s[i]) {
                return false; 
            }
        }
    }
    
    return stack.length === 0;
};
