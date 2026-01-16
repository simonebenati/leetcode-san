/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findMaxAverage = function(nums, k) {
//     let maxIndex = nums.length - k;
//     let avg = 0;
//     let maxAvg;
//     let slice;
//     let y = 0

//     for (let x = 0; x <= maxIndex; ++x) {
//         slice = nums.slice(x, nums.length)
//         for (; y < k; ++y) {
//             avg += slice[y];
//         }
//         avg = avg / y;
//         if (maxAvg < avg || !maxAvg) {
//             maxAvg = avg;
//         }
//         avg = 0;
//         y = 0;
//     }
//     return maxAvg
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let hm = {0: 0}
    let y = 0;
    let avg;
    let maxAvg;
    for (let x = 0; x < nums.length; ++x) {
        if (x <= k - 1 ) {
            hm[y] += nums[x]
        } else {
            y++;
            hm[y] = hm[y-1] + nums[x]
            hm[y] -= nums[x - k]
        }
    }
    for (key in hm) {
        avg = hm[key] / k
        if (maxAvg < avg || !maxAvg) {
            maxAvg = avg
        }
    }
    return maxAvg
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
// console.log(findMaxAverage([3,3,4,3,0], 3))