/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let expectedNums  = [];
    let current;

    for (let x = 0; x < nums.length; ++x) {
        if (current !== nums[x]) {
            current = nums[x];
            expectedNums.push(current);
        }
    }

    nums.length = 0;
    nums.push(...expectedNums);

    return nums.length
};

console.log(removeDuplicates([1,1,2]))