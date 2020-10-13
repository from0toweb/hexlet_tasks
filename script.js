const definitions = [
	[ 'Блямба', 'Выпуклость, утолщения на поверхности чего-либо' ],
	[ 'Бобр', 'Животное из отряда грызунов' ]
];

const buildDefinitionList = definitions => {
	if (definitions.length === 0) {
		return '';
	}
	let newArr = [];

	for (const elem of definitions) {
		newArr.push(`<dt>${elem[0]}</dt><dd>${elem[1]}</dd>`);
	}

	const resultArr = newArr.join('');
	return `<dl>${resultArr}</dl>`;
};
console.log(buildDefinitionList(definitions));
