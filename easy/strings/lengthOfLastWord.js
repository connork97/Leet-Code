/**
 * @param {string} s
 * @return {number}
 */

// * Final Solution, took about 3 more minutes
// * Time Complexity: O(n)
// * Space Complexity: O(1)
var lengthOfLastWord = function (s) {
    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') length++;
        else if (length > 0) return length;
    }
    return length;
};

// * Original Solution, Time to Complete: 5:16
// * Time Complexity: O(n), Space Complexity: O(n)
// var lengthOfLastWord = function(s) {
//     let splitS = s.split(' ');
//     if (splitS.length === 1) return splitS[0].length;
//     for (let i = 1; i <= splitS.length; i++) {
//         let lastWordLength = splitS[splitS.length - i].length;
//         if (lastWordLength !== 0) return lastWordLength;
//     }
// };