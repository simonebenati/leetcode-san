/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    arr = [];
    for (let i = 0; i < nums.length; i++) {
        if (val === nums[i])
            continue
        else
            arr.push(nums[i])
    }

    nums.length = 0;
    nums.push(...arr);
    
    return nums.length
};

console.log(removeElement([3,2,2,3], 3))