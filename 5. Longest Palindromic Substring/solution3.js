/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = "";
    let reverse = "";
    let palindrome = "";
    for (let x = 0; x < s.length; ++x) {
        for (let y = x+1; y <= s.length; ++y) {
            string = s.slice(x, y)
            for (let z = string.length - 1; z >= 0; --z) {
                reverse += string[z]
            }
            if (reverse === string && palindrome.length < string.length) {
                palindrome = string
            }
            reverse = "";
        }
    }
    return palindrome
};

console.log(longestPalindrome("cbbd"))

