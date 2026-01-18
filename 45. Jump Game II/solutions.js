/**
 * @param {number[]} nums
 * @return {boolean}
 */
var jump = function(nums) {
    let c = nums[0];
    len = nums.length
    if (len === 1)
        return true

    for (let x = 1; x < c; ++x) {
        if (x+nums[x] > c) {
            c = x+nums[x]
        }
        if (c >= len - 1) {
            return true
        }
    }
    return false
};

// console.log(jump([2,3,1,1,4]))
             //   0,1,2,3,4,5,6,7,8,9,10,11,12,13
console.log(jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]))