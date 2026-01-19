/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0)
        return false
    let arr = []
    while (x > 0) {
        arr.push(x % 10)
        x = parseInt(x / 10)
    }

    len = arr.length - 1

    for (let x = 0; x < len / 2; ++x) {
        if (arr[x] === arr[len - x])
            continue
        else
            return false
    }

    return true
};

console.log(isPalindrome(-121))