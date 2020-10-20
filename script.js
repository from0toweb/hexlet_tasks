const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];


export default (expression) => {

    const stack = [];


    for (const symbol of expression) {
        const lastSymbol = stack[stack.length - 1]


        if (openingSymbols.indexOf(symbol) !== -1) {
            stack.push(symbol);
        } else if (closingSymbols.indexOf(symbol) === openingSymbols.indexOf(lastSymbol))  {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};


console.log(isBracketStructureBalanced('(>'))
console.log(isBracketStructureBalanced('()'))
console.log(isBracketStructureBalanced('[()]'))
console.log(isBracketStructureBalanced('{<>}}'))
