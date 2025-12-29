/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = {}
    for (let x = 0; x < nums.length; ++x) {
        if (!result[nums[x]]) {
            result[nums[x]] = 0
        }
        result[nums[x]] += 1
    }
    for (let key in result) {
        let val = result[key]
        if (val > (nums.length / 2))
            return parseInt(key)
    }
};

console.log(majorityElement([2,2,1,1,1,2,2]))