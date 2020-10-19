const text1 = 'yyab'; // y, a, b
const text2 = 'You know nothing Jon Snow';
// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';


const countUniqChars = (text) => {
    if (text === '') 0

    let result = [];

    for (let i = 0; i < text.length; i += 1) {
        if (!result.includes(text[i])) {
            result.push(text[i])
        }
    }

    return result.length;
};

console.log(countUniqChars(text1)); // 3
console.log(countUniqChars(text2)); // 13
console.log(countUniqChars(text3)); // 0