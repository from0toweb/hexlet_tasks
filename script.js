const getIntersectionOfSortedArrays = (arr1, arr2) => {
    const result = [];
    const count = arr1.length + arr2.length;
    let arr1Ind = 0;
    let arr2Ind = 0;

    for (let i = 0; i < count; i += 1) {
        if (arr1[arr1Ind] === arr2[arr2Ind]) {
            result.push(arr1[arr1Ind]);
            arr1Ind += 1;
            arr2Ind += 1;
        }
        if (arr1[arr1Ind] > arr2[arr2Ind]) {
            arr2Ind += 1;
        }
        if (arr1[arr1Ind] < arr2[arr2Ind]) {
            arr1Ind += 1;
        }

    }

    return result;
};


console.log(getIntersectionOfSortedArrays([10, 11, 24], [10, 13, 14, 18, 24, 30]));
console.log(getIntersectionOfSortedArrays([10, 11, 24], [-2, 3, 4]));
console.log(getIntersectionOfSortedArrays([10, 12, 19, 21], [3, 5, 10]));