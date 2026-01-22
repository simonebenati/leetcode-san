/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let expectedNums  = [];
    let current;
    let blank = 0;
    for (let x = 0; x < nums.length; ++x) {
        if (current !== nums[x]) {
            current = nums[x];
            expectedNums.push(current);
        } else {
            ++blank;
        }
    }
    
    for (let y = 0; y < blank; ++y)
        expectedNums.push("_")

    return expectedNums 
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([1,1,2]))