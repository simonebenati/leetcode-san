/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let l = s.length
    let palindrome = "";
    let list = []
    let item = "";
    let reverse = ""

    for (let x = 0; x < l; ++x) {
        for (let y = x + 1; y <= l; ++y) {
            list.push(s.slice(x,y))
        }
    }
    for (i in list) {
        item = list[i]
        for (let z = item.length - 1; z >= 0; --z) {
            reverse += item[z]
        }
        if (item === reverse && palindrome.length < item.length) {
            palindrome = item
        }
        reverse = ""
    }
    return palindrome
};

// console.log("babad".slice(0,1))
console.log(longestPalindrome("azwdzwmwcqzgcobeeiphemqbjtxzwkhiqpbrprocbppbxrnsxnwgikiaqutwpftbiinlnpyqstkiqzbggcsdzzjbrkfmhgtnbujzszxsycmvipjtktpebaafycngqasbbhxaeawwmkjcziybxowkaibqnndcjbsoehtamhspnidjylyisiaewmypfyiqtwlmejkpzlieolfdjnxntonnzfgcqlcfpoxcwqctalwrgwhvqvtrpwemxhirpgizjffqgntsmvzldpjfijdncexbwtxnmbnoykxshkqbounzrewkpqjxocvaufnhunsmsazgibxedtopnccriwcfzeomsrrangufkjfzipkmwfbmkarnyyrgdsooosgqlkzvorrrsaveuoxjeajvbdpgxlcrtqomliphnlehgrzgwujogxteyulphhuhwyoyvcxqatfkboahfqhjgujcaapoyqtsdqfwnijlkknuralezqmcryvkankszmzpgqutojoyzsnyfwsyeqqzrlhzbc"))

// Comments:
// O(n^3)