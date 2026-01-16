/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let str = s
    let strLen = s.length;
    let comb = []
    let current;
    let currentLength;
    let isPalindrome = true;

    for (let x = strLen; x > 0; --x) {
        for (let y = 0; y <= strLen-x; ++y) {
            comb.push(str.slice(y, x+y))
        }
    }

    combLen = comb.length

    for (let x = 0; x < combLen; ++x) {
        current = comb[x]
        currentLength = comb[x].length - 1
        for (let y = 0; y < (currentLength - y); ++y) {
            if (!(current[y] === current[currentLength - y])) {
                truth = false;
                break;
            }
        }
        if (truth) {
            return current
        } else {
            truth = true;
        }
    }
    
    return str[0]
}

console.log(longestPalindrome("busislnescsicxpvvysuqgcudefrfjbwwjcchtgqyajdfwvkypfwshnihjdztgmyuuljxgvhdiwphrweyfkbnjgerkmifbirubhseuhrugwrabnjafnbdfjnufdstjbkuwtnpflffaqmjbhssjlnqftgjiglvvequhapasarlkcvbmkwnkuvwktbgfoaxteprobdwswcdyddyvrehvmxrrjiiidatidlpihkbmmruysmhhsncmfdanafdrfpdtfgkglcqpwrrtvacuicohspkounojuziittugpqjyhhkwfnflozbispehrtrnizowrlzcuollagxwtznjwzcumvedjwokueuqktvvouwnsmpxqvvpuwprezrbobrpnwaccwljchdguubjulyilzvmandjjleitweybqkjttschrjjlebnmponvlktzzcdtuybugggcqffkcffpamauvxfbonjrobgpvlyzveiwemmtdvbjciaytvesnocnjrwodtcokgcuoiicxapmrzpkfphjniuvzjrhbnqndfshoduejyktebgdabidxlkstepuwvtrtgbxaeheylicvhrxddijshcvdadxzsccmainyfpfdhqdanfccqkzlmhsfilvoybqojlvbcixjzqpbngdvesuokbxhkomsiqfyukvspqthlzxdnlwthrgaxhtpjzhrugqbfokrdcyurivmzgtynoqfjbafboselxnfupnpqlryvlcxeksirvufepfwczosrrjpudbwqxwldgjyfjhzlzcojxyqjyxxiqvfhjdwtgoqbyeocffnyxhyyiqspnvrpxmrtcnviukrjvpavervvztoxajriuvxqveqsrttjqepvvahywuzwtmgyrzduxfqspeipimyoxmkadrvrdyefekjxcmsmzmtbugyckcbjsrymszftjyllfmoeoylzeahnrxlxpnlvlvzltwnmldi"))