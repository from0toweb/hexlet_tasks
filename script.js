const sentence = 'When you play the game of thrones, you win or you die';
const sentence2 = 'chicken chicken? chicken! chicken';

const makeCensored = (sentence, arr) => {
	let newArr = sentence.split(' ');

	for (let i = 0; i < newArr.length; i += 1) {
		if (newArr[i] === arr[0] || newArr[i] === arr[1]) {
			newArr[i] = '$#%!';
		}
	}

	const newStr = newArr.join(' ');

	return newStr;
};

const result = makeCensored(sentence, [ 'die', 'play' ]);
// When you $#%! the game of thrones, you win or you $#%!
const result2 = makeCensored(sentence2, [ '?', 'chicken' ]);
// '$#%! chicken? chicken! $#%!';

console.log(result);
console.log(result2);
