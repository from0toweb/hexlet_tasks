const getMax = arr => {
    if (!arr.length) {
        return null;
    }

    let [min, ...newArr] = arr;

    for (const element of newArr) {
        if (element > min) {
            min = element;
        }
    }
    return min;
};

console.log(getMax([]));
console.log(getMax([1, 10, 8]));
