/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    // Clean up string
    s = s.toLowerCase().replace(/[^a-z\d]+/g, '');

    // Verify string
    return s === s.split('').reverse().join('');
};