/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// * Time Complexity: O(n)
// * Space Complexity: O(k)
var isIsomorphic = function (s, t) {
    const map = new Map();
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            if (map.get(s[i]) !== t[i]) return false;
        } else {
            if (seen.has(t[i])) return false;
            map.set(s[i], t[i]);
            seen.add(t[i]);
        }
    }

    return true;
};


// * ORIGINAL SOLUTION:
// * Time Complexity: O(n)
// * Space Complexity: O(k) => Effectively O(n), but rather than based on the sheer input "size" (length), it depends further on the Unique Characters of "n", which will either be equal to "n" or less than it.
// var isIsomorphic = function (s, t) {
//     let seen = new Set();
//     let sMap = new Map();

//     for (let i = 0; i < s.length; i++) {
//         if (!seen.has(t[i])) {
//             sMap.set(s[i], t[i]);
//             seen.add(t[i]);
//         }
//     }
    
//     for (let i = 0; i < s.length; i++) {
//         const sKey = sMap.get(s[i]);
//         if (t[i] !== sKey) return false;
//     }
//     return true;
// };