/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// * Time To Complete:  10:47
// * Time Complexity: O(n)
// * Space Complexity: O(1)
var reduce = function(nums, fn, init) {
    for (let num of nums) {
        init = fn(init, num)
    }
    return init;
};