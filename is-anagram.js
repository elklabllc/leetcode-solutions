/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();
    if(s.length === t.length){

        // Map number of times a letter appeared in first string
        for(let i = 0; i < s.length; i++){
            if(sMap.has(s[i])){
                sMap.set(s[i], sMap.get(s[i]) + 1);
            } else {
                sMap.set(s[i], 1);
            }
        }

        // Map number of times a letter appeared in second string
        for(let i = 0; i < t.length; i++){
            if(tMap.has(t[i])){
                tMap.set(t[i], tMap.get(t[i]) + 1);
            } else {
                tMap.set(t[i], 1);
            }
        }

        // Compare the two maps
        for(let [key, val] of sMap){
            testVal = tMap.get(key);
            if(testVal !== val || (testVal === undefined && !sMap.has(key))){
                return false;
            }
        }

        return true;
    }
    return false;
};