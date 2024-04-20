/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const lowestSignedIntegerAllowed = Math.pow(2, 31) * -1;
    const highestSignedIntegerAllowed = Math.pow(2, 31) - 1;

    const parsedInteger = Number.parseInt(s);

    if (parsedInteger) {
        if (parsedInteger <= lowestSignedIntegerAllowed) return lowestSignedIntegerAllowed;
        else if (parsedInteger >= highestSignedIntegerAllowed) return highestSignedIntegerAllowed;
        else return parsedInteger;
    }
    return 0;
};