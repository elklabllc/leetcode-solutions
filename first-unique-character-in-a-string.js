/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    for(i=0;i<s.length;i++){
        // Check if the only occurance of char is at this index
        if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
           return i;
       } 
    }
    return -1;
 };