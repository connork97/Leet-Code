/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// * O(n)

var twoSum = function (nums, target) {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const numToFind = target - nums[i];
        if (numsMap.has(numToFind)) {
            return [numsMap.get(numToFind), i]
        }
        numsMap.set(nums[i], i);
    }
};

// * O(n^2)

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         let numToFindIndex = nums.lastIndexOf(target - nums[i]);
//         if (i != numToFindIndex && numToFindIndex != -1) {
//             return [i, numToFindIndex]
//         }
//     }
//     return [];
// };