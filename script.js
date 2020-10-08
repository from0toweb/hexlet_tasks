const temperatures1 = [ 37.5, 34, 39.3, 40, 38.7, 41.5 ];
const temperatures2 = [ 36, 37.4, 39, 41, 36.6 ];
const temperatures = [];

const calculateAverage = arr => {
	let result = 0;

	if (arr.length) {
		for (const elem of arr) {
			result += elem;
		}
		return result / arr.length;
	}
	return null;
};

console.log(calculateAverage(temperatures1));
console.log(calculateAverage(temperatures2));
console.log(calculateAverage(temperatures));
