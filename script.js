const money1 = [ 'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5' ];
const money2 = [ 'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200' ];
const money3 = [ 'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200' ];

const getTotalAmount = (arr, currency) => {
	let result = 0;

	for (const elem of arr) {
		const elemCurrency = elem.slice(0, 3);
		const elemValue = elem.slice(4);

		if (elemCurrency !== currency) {
			continue;
		}
		result += +elemValue;
	}
	return result;
};

console.log(getTotalAmount(money1, 'usd'));
console.log(getTotalAmount(money2, 'eur'));
console.log(getTotalAmount(money3, 'rub'));
