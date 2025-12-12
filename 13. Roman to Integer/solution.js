/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let tot = 0;
    const len = s.length;
    let prec = 0;
    let current = 0;
    for (let x = 0; x < len; x++) {
        switch (s[x]) {
            case "I":
                current=1;    
                break;
            case "V":
                current=5;    
                break;
            case "X":
                current=10;    
                break;
            case "L":
                current=50;    
                break;
            case "C":
                current=100;    
                break;
            case "D":
                current=500;    
                break;
            case "M":
                current=1000;    
                break;
            default:
                current=0;
                break;
        }
        tot += current+(current <= prec ? 0 : - 2*prec);
        prec = current;
    }
    return tot;
}

console.log(romanToInt("MCMXCIV")) //1994