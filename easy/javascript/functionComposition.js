/**
 * @param {Function[]} functions
 * @return {Function}
 */
// * Time To Complete: 4:15
// * Time Complexity: O(n)
// * Space Complexity: O(1)
var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */