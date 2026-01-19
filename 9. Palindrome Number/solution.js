/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let str = x.toString()
    let len = str.length - 1
    for (let x = 0; x < len / 2; ++x) {
        if (str[x] === str[len - x])
            continue
        else
            return false
    }
    return true
};

console.log(isPalindrome(121))