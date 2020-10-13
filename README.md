### arrays.js

Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход в виде массива кошелёк с деньгами и название валюты и возвращает сумму денег указанной валюты.

Реализуйте данную функцию используя управляющие инструкции.

Параметры функции:

- Массив, содержащий купюры разных валют с различными номиналами
- Наименование валюты

## Примеры
```
const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135

const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
getTotalAmount(money3, 'rub') // 270
```
## Подсказки
- Названия валют состоят из 3-х символов.
- Для извлечения подстроки из строки используйте метод slice().
```
const str = 'some text';
str.slice(1, 6); // 'ome t'
str.slice(7);    // 'xt'
```

[МОЕ РЕШЕНИЕ](https://github.com/from0toweb/hexlet_tasks/blob/arrayTask_break-continue/script.js)


[&#x2190; Назад](https://github.com/from0toweb/hexlet_tasks/tree/master)
