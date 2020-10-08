const getSameParity = arr => {
	let evenNumber = Math.abs(arr[0]) % 2;
	let result = [];

	if (arr.length) {
		for (const elem of arr) {
			if (Math.abs(elem) % 2 === evenNumber) {
				result.push(elem);
			}
		}
	}

	return result;
};

console.log(getSameParity([]));
console.log(getSameParity([ 1, 2, 3 ]));
console.log(getSameParity([ 1, 2, 8 ]));
console.log(getSameParity([ 2, 2, 8 ]));
