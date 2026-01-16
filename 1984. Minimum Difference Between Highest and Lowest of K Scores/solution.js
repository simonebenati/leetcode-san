/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
    let diff;
    let min = 0;
    let arr = nums;
    let len = nums.length;
    let tmp;


    
    // for (let x = 1; x < len-1; ++x) {        
    //     if (arr[x] < arr[x-1]) {
    //         tmp = arr[x-1]
    //         arr[x-1] = arr[x]
    //         arr[x] = tmp
    //         x = 0
    //     }
    //     if (arr[x] > arr[x+1]) {
    //         tmp = arr[x+1]
    //         arr[x+1] = arr[x]
    //         arr[x] = tmp
    //         x = 0
    //     }
    // }
    
   for (let x = 0; x <= len - k; ++x) {
        console.log("x+k-1", x+k-1, "x", x)
        diff = Math.abs(arr[x+k-1] - arr[x])
        console.log(diff)
    }
    
    return 0
};

console.log(minimumDifference([9,4,1,7], 2))

// [9918, 21297, 44530, 61094, 87063, 93551, 95857]