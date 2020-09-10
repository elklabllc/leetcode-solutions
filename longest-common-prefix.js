/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    // Covers possible test cases out of the scope of the algorithm
    if(strs.length === 0){return ""}
    if(strs.length === 1){return strs[0]}

    // Cycle through letters of the first string and verify with other strings
    for(let i = 0; i < strs[0].length; i++){
        for(let j = 0; j < strs.length-1; j++){
            if(strs[j][i] !== strs[j+1][i]){
                return strs[j].substr(0, i);
            }
        }
        if (i === strs[0].length-1){
            return strs[0];
        }
    }

    // If all else fails, return an empty string
    return "";
};

console.log(longestCommonPrefix(["a","a","b"]));