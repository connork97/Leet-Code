/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */

var wordPattern = function(pattern, s) {
    const sArr = s.split(' ')
    if (pattern.length !== sArr.length) return false;

    const seen = new Set();
    const map = new Map();

    for (let i = 0; i < pattern.length; i++) {
        if (map.has(pattern[i])) {
            if (map.get(pattern[i]) !== sArr[i]) return false;
        }
        else {
            if (seen.has(sArr[i])) return false;
            map.set(pattern[i], sArr[i]);
            seen.add(sArr[i])
        }
    }
    return true;
};


// ORIGINAL SOLUTION:  Time to Complete: 14:53
// Time Complexity: O(n) => Originally I thought it was O(m + n), but the lengths are tied together at the start
// Space Complexity: O(m + n)?
// var wordPattern = function(pattern, s) {
//     sArr = s.split(' ')
//     if (pattern.length !== sArr.length) return false;

//     const seen = new Set();
//     const map = new Map();

//     for (let i = 0; i < pattern.length; i++) {
//         if (!seen.has(sArr[i])) {
//             map.set(pattern[i], sArr[i]);
//             seen.add(sArr[i])
//         }
//     }
//     for (let i = 0; i < pattern.length; i++) {
//         if (map.get(pattern[i]) !== sArr[i]) return false;
//     }
//     return true;
// };