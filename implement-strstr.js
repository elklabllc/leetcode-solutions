/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) { return 0 }
    let i = 0;
    let j = 0;
    while(i < needle.length && j < haystack.length){
        if(needle[i] === haystack[j]){
            i++;
        } else if (i > 0){
            j = j-i;
            i=0;
        }
        j++;
        if(i === needle.length){
            return j-i;
        }
    }

    return -1;
};

console.log(strStr("hello", "ll"));