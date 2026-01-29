/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let len = s.length
    let sum = 0;

    for(let x = len - 1; x >= 0; x--) {
        if (s[x] === ' ' && sum === 0)
            continue
        else if (s[x] !== ' ') {
            sum++;
        } else {
            return sum
        }
    }

    return sum
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("a"))