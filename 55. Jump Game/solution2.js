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
        } else if (arr[arr[x]+x] === 0 || sum > len) {
            arr[x] = arr[x] - 1;
            if (sum+arr[x] === len) {
                return true
            }
            sum = x;
        } else if (sum+arr[x] > len) {
                return true
            } 
        else {
            sum = sum + arr[x];
            if (sum === len) {
                return true
            }
            x = sum
        }
    }
    
    return false
};

console.log(canJump([3,2,1,0,4]))