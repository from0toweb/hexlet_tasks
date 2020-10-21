const flatten = arr => {
    if (!arr.length) {
        return arr;
    }

    let result = [];

    for (const element of arr) {
        if (Array.isArray(element)) {
            result = [...result, ...element];
        } else {
            result = [...result, element];
        }
    }

    return result;
};

console.log(flatten([]));
console.log(flatten([1, [3, 2], 9]));
console.log(flatten([1, [[2], [3]], [9]]));
