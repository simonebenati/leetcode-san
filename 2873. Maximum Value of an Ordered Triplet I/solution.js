/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
    let k
    let j
    let i
    let max = 0;

    for (k = nums.length - 1; k >= 2; k--) {
        for (j = k - 1; j >= 1; j--) {
            for (i = j - 1; i >= 0; i--) {
                if (nums[i] - nums[j] > 0) {
                    max = ((nums[i] - nums[j]) * nums[k]) > max ? (nums[i] - nums[j]) * nums[k] : max
                }
            }
        }
    }

    return max
};
// Analisi:
// La prima soluzione che salta all'occhio nel tempo e' un O(n^3)
// 3 cicli for per iterare su ogni possibile combinazione
// Nota solo che 'k' non andra' mai oltre l'indice 2, 'j' indice 1
// Poiche' altrimenti verrebbe meno la condizione di tripletta


console.log(maximumTripletValue([1,10,3,4,19]))