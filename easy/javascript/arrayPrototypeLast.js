/**
 * @return {null|boolean|number|string|Array|Object}
 */
// * Time to Complete: 3:40
// * Time Complexity: O(1)
// * Space Complexity: O(1)
Array.prototype.last = function() {
    return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */