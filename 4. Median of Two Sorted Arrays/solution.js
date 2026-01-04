/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
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


console.log(findMedianSortedArrays([2,2,4,4],[2,2,4,4]));

//Ragionamento:

// var findMedianSortedArrays = function(nums1, nums2) {
//     let m = nums1.length;
//     let n = nums2.length;
//     let mergeArrayLength = m + n;
//     let mergeArray = [];
//     let x = 0;

//     for (; x < m; ++x) {
//         mergeArray[x] = nums1[x]
//     }

//     for (let y = 0; x < mergeArrayLength; ++y) {
//         mergeArray[x] = nums2[y];
//         ++x;
//     }

//     mergeArray.sort((a,b) => a - b)

//     if (mergeArrayLength % 2 === 0) {
//         return (mergeArray[(mergeArrayLength/2) - 1] + mergeArray[(mergeArrayLength/2)]) / 2
//     } else {
//         return (mergeArray[Math.floor(mergeArrayLength/2)])
//     }
// };
// Risolve sufficientemente bene il problema con 4ms 