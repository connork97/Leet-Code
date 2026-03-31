/**
 * @param {number[]} nums
 * @return {number}
 */

// * Time Complexity: O(n)
// * Space Complexity: O(1)
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

// * ORIGINAL SOLUTION
// * Time to Complete: 12:18
// * Time Complexity: O(n^2)
// * Space Complexity: O(1)
// var removeDuplicates = function (nums) {
//     let lastNum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] === lastNum) {
//             nums.splice(i, 1)
//             i--;
//         } else {
//             lastNum = nums[i];
//         }
//     }
//     return nums.length;
// };

// More "code efficient" version of the "if/else" V
// var removeDuplicates = function (nums) {
//     let lastNum = nums[0];
//     for (let i = 1; i < nums.length; i++) {
        // nums[i] === lastNum ? nums.splice(i, 1) && i-- : lastNum = nums[i]
//     }
//     return nums.length;
// };