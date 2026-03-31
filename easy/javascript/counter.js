/**
 * @param {number} n
 * @return {Function} counter
 */
// * Original Solution:
// * Time To Complete: 1:20
// * Time Complexity: O(1)
// * Space Complexity: O(1)
// var createCounter = function(n) {
//     n -= 1;
//     return function() {
//         return n += 1;
//     };
// };

// * Slightly Better Solution:
var createCounter = function(n) {
    return function() {
        return n++;
    }
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */