/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let n = needle.length
    for (let x = 0; x <= haystack.length - needle.length; x++) {
        if (haystack.slice(x, n+x) === needle)
            return x
    }
    return -1
};

console.log(strStr("sadbutsad", "sad"))
console.log(strStr("a", "a"))