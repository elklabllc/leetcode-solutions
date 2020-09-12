/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {

    // Removing white space characters
    let final = parseInt(str.trim());

    // Optimizing return for criteria
    if(isNaN(final))
        return 0;
    else if(final < -2147483648)
        return -2147483648;
    else if(final > 2147483647)
        return 2147483647;
    else
        return final;
};