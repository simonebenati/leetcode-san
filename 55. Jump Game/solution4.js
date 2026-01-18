/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
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

console.log(canJump([3,2,1,0,4]))
console.log(canJump([5,1,1,1,3,2,2]))
console.log(canJump([0]))
console.log(canJump([2,0,0]))