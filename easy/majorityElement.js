/**
 * @param {number[]} nums
 * @return {number}
 */

// * O(n) Time Complexity, and O(1) Space Complexity
var majorityElement = function(nums) {

    let candidate;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        num === candidate ? count++ : count--;
    }
    return candidate;
};


// * O(n) Time Complexity, and O(n) Space Complexity

// var majorityElement = function(nums) {

//     let majority = Math.floor(nums.length / 2) + 1;
//     let numsMap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const count = (numsMap.get(nums[i]) || 0) + 1;
//         numsMap.set(nums[i], count)
//         if (count === majority) return nums[i]
//     }
// };