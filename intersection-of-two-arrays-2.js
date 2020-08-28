/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {     
    const hash = {}, ar = [];

    // Check second array for numbers, add them to hash 
    nums2.forEach(num => {
        if(hash[num]){
            hash[num]++;
        } else {
            hash[num] = 1
        }
    })
    
    // Verify match with the hash and add to intersection arr
    for (let i = 0; i < nums1.length; i++){
        if (hash[nums1[i]] > 0){
            ar.push(nums1[i])
            hash[nums1[i]]--
        }
    }
    return ar
};