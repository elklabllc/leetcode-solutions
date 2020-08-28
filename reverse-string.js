/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Reverse half of the array (to not re-reverse)
    for(let i = 0; i < s.length/2; i++){
        // Temporary variable to save the value that will be replaced
        let tempC = s[i];

        // Swap values from front and back
        s[i] = s[s.length-i-1];
        s[s.length-i-1] = tempC; 
    }
    return s;
};