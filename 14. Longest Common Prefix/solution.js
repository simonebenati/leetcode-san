/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let min = strs[0].length;
    let letter;
    let prefix = "";

    for (let x = 0; x < strs.length; ++x) {
        if (min > strs[x].length) {
            min = strs[x].length
        }
    }

    for (let y = 0; y < min; y++) {
        letter = strs[0][y];
        for (let z = 0; z < strs.length; ++z) {
            if (!(letter === strs[z][y]))
                return prefix
        }
        prefix += letter
    }
    return prefix
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))