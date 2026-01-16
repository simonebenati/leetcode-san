// var palindrome = function(s) {
//     for (let x = 0; x < (s.length - 1 - x); ++x) {
//         if (s[x] === s[(s.length - 1) - x])
//             continue
//         else
//             return false
//     }
//     return true
// }

// var palindrome = function(s) {
//     let string = s;
//     let len = s.length - 1;

//     for (let x = 0; x < len - x; ++x) {
//         if (string[x] === string[len - x]) {
//             continue
//         }
//         else {
//             y = string.length % 2 === 0 ? 1 : 0
//             string = string.slice(x + 1, len - x + y)
//             len = string.length - 1
//             x = 0
//         }
            
//     }
//     return string
// }


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length
    let palindrome = "";
    let truth = true;
    let p = [];
    let hm = {};
    let string = s;
    let idx = 0;
    let tempStr;
    let tempStrLen;

    for (let x = 0; x < len; ++x) {
        for (let y = 0; y < len; ++y) {
            
        }
    }
    console.log(string = )
    for (key in hm) {
        tempStr = hm[key]
        tempStrLen = tempStr.length - 1
        for (x = 0; x < tempStrLen - x; ++x) {
            if (!(tempStr[x] === tempStr[tempStrLen - x])) {
                truth = false;
                break;
            }
        }
        if (truth) {
            palindrome = palindrome.length <= tempStrLen ? tempStr : palindrome
        }
        truth = true;
    }
    return palindrome
}

// console.log("babad".slice(1,4))
// console.log("abbcccba".slice(3,6))
// console.log("cbbd".slice(1,3))
console.log(longestPalindrome("abb"))


// TRACE ALL POSSIBILITIES USING SLIDING WINDOW PLACE INTO HM O(N)
// CHECK FOR EACH KEY IF PALINDROME AND IF PALINDROME < current key
// EXPECTED O(N)*O(N^2) => 2N^2 => N^2 