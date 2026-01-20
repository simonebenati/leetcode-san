/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let temp = [];
    let arr = [];
    for (let i = 0; i < s.length; ++i) {
        arr += s[i]
    }

    for (let x = 0; x < arr.length; ++x) {
        switch (arr[x]) {
            case "(":
                temp.push(arr[x])
                break;
            case "[":
                temp.push(arr[x])
                break;
            case "{":
                temp.push(arr[x])
                break;
            case ")":
                if (temp[temp.length - 1] === "(") {
                    temp.pop();
                    break;
                } else {
                    return false
                }
            case "]":
                if (temp[temp.length - 1] === "[") {
                    temp.pop();
                    break;
                } else {
                    return false
                }
            case "}":
                if (temp[temp.length - 1] === "{") {
                    temp.pop();
                    break;
                } else {
                    return false
                }
            default:
                return false
        }
    }
    if (temp.length > 0)
        return false
    else
        return true
};

console.log(isValid("([])[]{}"))