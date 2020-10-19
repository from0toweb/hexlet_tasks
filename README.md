Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов (без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.

## Примеры

```
/const text1 = 'yyab'; // y, a, b
countUniqChars(text1); // 3

const text2 = 'You know nothing Jon Snow';
countUniqChars(text2); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
countUniqChars(text3); // 0
```

[МОЕ РЕШЕНИЕ](https://github.com/from0toweb/hexlet_tasks/blob/arrayTask_set-theory/script.js)

[&#x2190; Назад](https://github.com/from0toweb/hexlet_tasks/tree/master)
