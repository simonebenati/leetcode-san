# Reasoning:

Approaching the problem i realize that the difficulty relies in creating the merged array efficiently.
I proceed merging the two con difficulty O(2n) => O(n)
Lastly I sort these leveraging js stdlib (***Note:*** I need to rewrite the sort myself) sort and then simply conditionally exit based on exercise logic.

```js
var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let mergeArrayLength = m + n;
    let mergeArray = [];
    let x = 0;

    for (; x < m; ++x) {
        mergeArray[x] = nums1[x]
    }

    for (let y = 0; x < mergeArrayLength; ++y) {
        mergeArray[x] = nums2[y];
        ++x;
    }

    mergeArray.sort((a,b) => a - b)

    if (mergeArrayLength % 2 === 0) {
        return (mergeArray[(mergeArrayLength/2) - 1] + mergeArray[(mergeArrayLength/2)]) / 2
    } else {
        return (mergeArray[Math.floor(mergeArrayLength/2)])
    }
};
```
The above snippet resolves the issue sufficiently well with 4ms on leetcode.

