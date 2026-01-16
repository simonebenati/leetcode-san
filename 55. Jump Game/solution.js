/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let arr = nums;
    let len = arr.length - 1
    let sum = 0;
    let curr = arr[sum];
    let c = 0;

    while (true) {
        console.log("step ", sum, arr[sum], curr)
        if (sum < len) {
            if (curr !== 0) {
                if (arr[sum + curr] !== 0) {
                    sum += curr
                    curr = arr[sum]
                } else {
                    curr--;
                    if (curr === 0) {
                        sum--;
                        if (sum === 0)
                            return false
                        curr = arr[sum]
                    }
                }
            } else {
                --sum;
            }
        } else if (sum > len) {
            --sum;
        } else if (sum === len) {
            return true
        } else {
            return false
        }
    }
};
                //   0,1,2,3,4,5,6,7,8,9,10,11
console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))