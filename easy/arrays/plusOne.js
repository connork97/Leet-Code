/**
 * @param {number[]} digits
 * @return {number[]}
 */


// * Original Solution, Time to Complete: 15:28
// * Time Complexity: O(n)
// * Space Complexity: O(1)
var plusOne = function (digits) {
    let lastIndex = digits.length - 1
    digits[lastIndex] += 1;
    for (let i = lastIndex; i >= 0; i--) {
        if (digits[i] !== 10) return digits;
        digits[i] = 0;
        if (i === 0) {  //  Only change in code is this line.
        // Originally wrote:  "if (!digits[i - 1]) {" which worked fine but the number 0 would also trigger it due to being falsey
            digits.unshift(1);
            return digits;
        }
        digits[i - 1] += 1;
    }
    return digits;
};