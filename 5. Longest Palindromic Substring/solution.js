/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let string = s;
    let rightString = "";
    let palindrome = "";

    for (let x = 0; x <= s.length - 1; ++x) {
        string = s.slice(x, s.length)
        for (let z = string.length - 1; z >= 0; --z) {
            string = string.slice(0, z+1)
            for(let y = string.length - 1; y >= 0; --y) {
                rightString += string[y]
            }
            if (string === rightString && string.length > palindrome.length) {
                palindrome = string
            }
            rightString = ""
        }
    }
    return palindrome
};

let a = "a"
let b = a.slice(0,1)
console.log(longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"));

// Comments:
// O(n^4)
