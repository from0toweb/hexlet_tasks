

const bubbleSort = (arr) => {
    let count = arr.length - 1;

    let a;

    do {
        a = false;

        for (let i = 0; i < count; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let num = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = num;

                a = true;
            }
        }
        count -= 1;
    } while (a)

    return arr;
};

console.log(bubbleSort([3, 2 ,0 ,10 ,-2]));
console.log(bubbleSort([3, 10, 4, 3]));
console.log(bubbleSort([]));