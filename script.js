const scores = [ [ 3, 2 ], [ 4, 1 ], [ 5, 8 ], [ 5, 5 ], [ 2, 2 ], [ 2, 4 ], [ 4, 2 ], [ 2, 3 ] ];

const getSuperSeriesWinner = scores => {
	let result = 0;

	for (let i = 0; i < scores.length; i += 1) {
		if (scores[i][0] < scores[i][1]) result += 1;
		if (scores[i][0] > scores[i][1]) result += -1;
		if (scores[i][0] === scores[i][1]) result += 0;
	}

	if (Math.sign(result) > 0) {
		return 'ussr';
	}
	if (Math.sign(result) < 0) {
		return 'canada';
	}
	if (Math.sign(result) === 0) {
		return null;
	}
};

console.log(getSuperSeriesWinner(scores));
