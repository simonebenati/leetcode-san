/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let arr = nums;
    let len = arr.length - 1;
    let sum = 0;
    let x = 0;

    if (len === sum)
        return true
    
    if (arr[x] === len) {
        return true
    }
    
    for (x; x < len; x) {
        if (arr[x]+x === len) {
            return true
        }
        if (arr[x] === 0) {
            x--;
        } else if (arr[arr[x]+x] === 0) {
            arr[x] = arr[x] - 1;
            if (sum+arr[x] === len) {
                return true
            }
            sum = x;
        } else if (sum > len) {
            arr[x] = arr[x] - 1;
            if (sum+arr[x] === len) {
                return true
            }
        } else {
            if (sum+arr[x] > len) {
                arr[x] = len - sum
            }
            sum = sum + arr[x];
            x = sum
            if (sum === len) {
                return true
            }
        }
    }
    
    return false
};

console.log(canJump([5,9,3,2,1,0,2,3,3,1,0,0]))