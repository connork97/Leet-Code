/**
 * @param {number[]} nums
 * @return {boolean}
 */

// * Time Complexity: O(n), Space Complexity: O(n).
// * Time to Complete: 2:30
var containsDuplicate = function (nums) {    
    const seen = new Set();
    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
};

// * Slightly less efficient one line version
// var containsDuplicate = function (nums) {
    // return new Set(nums).size !== nums.length;
// };
