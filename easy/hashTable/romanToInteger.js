/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000]
    ]);
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let nextTwoLetters = s[i] + s[i+ 1]
        if (romanMap.has(nextTwoLetters)) {
            total += romanMap.get(nextTwoLetters);
            i++
        } else {
            total += romanMap.get(s[i]);
        }
    }
    return total;
};