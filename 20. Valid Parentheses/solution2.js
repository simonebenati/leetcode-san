/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    let temp = "";

    for (let x = 0; x < len; ++x) {
        switch (s[x]) {
            case "(":
                temp += s[x];
                break;
            case "[":
                temp += s[x];
                break;
            case "{":
                temp += s[x];
                break;
            case ")":
                if (temp[temp.length - 1] === "(") {
                    temp = temp.slice(0, temp.length - 1);
                    break;
                } else {
                    return false
                }
            case "]":
                if (temp[temp.length - 1] === "[") {
                    temp = temp.slice(0, temp.length - 1);
                    break;
                } else {
                    return false
                }
            case "}":
                if (temp[temp.length - 1] === "{") {
                    temp = temp.slice(0, temp.length - 1);
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

console.log(isValid("([])[]{"))