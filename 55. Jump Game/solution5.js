/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let c = 0; //5
    let j = 0;
    len = nums.length
    if (len === 1)
        return true

    for (let x = 0; x < len; ++x) {
        // if (nums[x] === 0 && x === c) {
        //     return false
        // } 
        if (x+nums[x] > c) {
            c = x+nums[x]
            j++
        }
        if (c >= len - 1) {
            return j
        }
    }
    return false
};