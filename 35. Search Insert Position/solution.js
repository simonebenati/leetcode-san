/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let len = nums.length
    
    for (let x = 0; x < len; x++) {
        if (target === nums[x])
            return x;
        if (nums[x] > target)
            return x
    }
    return len
};

console.log(searchInsert([1,3,5,6], 4))