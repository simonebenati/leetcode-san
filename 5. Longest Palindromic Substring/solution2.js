var longestPalindrome = function(s) {
    let leftString = "";
    let rightString = "";
    let palindrome = "";
    let y = s.length - 1

    for(let x = 0; x < s.length; ++x) {
        string = s.slice(x,s.length)
        if (checkPalindrome(string) && string.length > palindrome) {
            palindrome = string
        }
    }
    return palindrome
};

var checkPalindrome = function(s) {
    return true
}

O(N)

abc
