/**
 * @param {number} n
 * @return {boolean}
 */

// * Time Complexity: O(log n)
// * Space Complexity: O(log n)
var isHappy = function (n) {
    const numSet = new Set();
    let numString = String(n)

    while (!numSet.has(numString)) {
        numSet.add(numString);
        let newNumString = 0;
        for (let num of numString) {
            newNumString += parseInt(num) ** 2;
        }
        numString = String(newNumString);
    }
    if (parseInt(numString) === 1) return true;
    return false;
};

// * Time Complexity: O(log n)
// * Space Complexity: "Effectively (bounded)" O(1)
// var isHappy = function (n) {
//     const seen = new Set();

//     while (n !== 1 && !seen.has(n)) {
//         seen.add(n);
//         let sum = 0;

//         while (n > 0) {
//             const digit = n % 10;
//             sum += digit * digit;
//             n = Math.floor(n / 10);
//         }

//         n = sum;
//     }

//     return n === 1;
// };