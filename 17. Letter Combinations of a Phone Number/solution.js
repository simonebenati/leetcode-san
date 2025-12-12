/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    const numbers = new Map([
        ['2', ['a','b','c']],
        ['3', ['d','e','f']],
        ['4', ['g','h','i']],
        ['5', ['j','k','l']],
        ['6', ['m','n','o']],
        ['7', ['p','q','r','s']],
        ['8', ['t','u','v']],
        ['9', ['w','x','y','z']]
    ]);
    const digitsLength = digits.length

    // Calculate number of possibility by calculating for each digit how many possibilities i can enter i.e. 2 has 3 possibilities
    let numberOfPossibilities = 1;
    for (let i = 0; i <= (digitsLength - 1); i++) {
        numberOfPossibilities *= (numbers.get(digits[i])).length;
    }

    // Place the possibilities
    let x = 0; // "digits" counter
    let y = 0; // total letter repetition counter
    let z = 0; // letter index of map list [a,b,c] if z = 0 when 2 is selected we insert a
    let a = 0; // relative letter repetition counter
    let b = 0;
    let relativeNumberOfPossibilities = numberOfPossibilities / (numbers.get(digits[x])).length;
    let possibilities = [];
    while (x < digitsLength) {
        possibilities[y] = (possibilities[y] ?? "") + (numbers.get(digits[x]))[z];
        ++y;
        ++b;
        // We go from a -> to b when a is entered 12 times
        if ( b === relativeNumberOfPossibilities) {
            ++z;
            b = 0;
            a += 1;
        }
        if ( a === (numbers.get(digits[x]).length)) {
            a = 0;
            z = 0;
        }
        if ( y === numberOfPossibilities) {
            y = 0;
            ++x;
            if (x >= digitsLength)
                continue
            relativeNumberOfPossibilities = relativeNumberOfPossibilities / (numbers.get(digits[x])).length
        }
    }
    return possibilities;

};

console.log(letterCombinations("237"));