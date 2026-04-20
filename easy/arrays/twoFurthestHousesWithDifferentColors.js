
/**
 * https://leetcode.com/problems/two-furthest-houses-with-different-colors/description/?envType=daily-question&envId=2026-04-20
 * @param {number[]} colors
 * @return {number}
 */

// TIME TO COMPLETE: 10:01
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)
var maxDistance = function (colors) {
    let answer1 = 0;
    let answer2 = 0;

    let i = 0;
    let j = colors.length - 1;

    if (colors[i] !== colors[j]) return colors.length - 1;
    while (colors[i] === colors[j] && i < j) {
        j--;
    }
    answer1 = j - i;
    j = colors.length - 1;

    while (colors[i] === colors[j] && i < j) {
        i++;
    }
    answer2 = j - i;

    if (answer1 >= answer2) return answer1;
    return answer2;
};