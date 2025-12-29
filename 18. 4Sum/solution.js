/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const arrayLength = nums.length
    if (arrayLength < 4)
        return []
    const returnArray = [];
    const sortedArray = nums.sort((a,b) => a - b);
    let smallTarget = 0;
    let x = 0;
    let y = 1;
    let r = arrayLength - 1
    let l = 2
    let valAtX = sortedArray[x]
    while (x < arrayLength - 3) {
        if (valAtX !== sortedArray[x-1]) {
            while (y < arrayLength - 2) {
                smallTarget = target - (valAtX + sortedArray[y])
                if (smallTarget > sortedArray[arrayLength - 1] + sortedArray[arrayLength-2]) {
                    y++;
                    l = y + 1;
                    r = arrayLength - 1;
                } else {
                    while (l < r) {
                        const sum = valAtX + sortedArray[y] + sortedArray[l] + sortedArray[r];
                        
                        if (sum === target) {
                            returnArray.push([valAtX, sortedArray[y], sortedArray[l], sortedArray[r]]);
                            l++;
                            r--;
                            while (l < r && sortedArray[l] === sortedArray[l-1]) l++;
                            while (l < r && sortedArray[r] === sortedArray[r+1]) r--;
                        } else if (sum > target) {
                            r--;
                        } else {
                            l++;
                        }
                    }
                    y++;
                    while (y < arrayLength - 2 && sortedArray[y] === sortedArray[y-1]) y++;
                    l = y + 1;
                    r = arrayLength - 1;
                }
            }
            x++;
            valAtX = sortedArray[x];
            y = x+1;
            r = arrayLength - 1;
            l = y+1;
        } else {
            x++;
            valAtX = sortedArray[x];
            y = x+1;
            r = arrayLength - 1;
            l = y+1;
        }
    }
    return returnArray;
};

console.log(fourSum([2,2,2,2,2], 8)) //returns [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]