Реализуйте и экспортируйте функцию getTheNearestLocation(), которая находит место ближайшее к указанной точке на карте и возвращает его. Параметры функции:

locations – массив мест на карте. Каждое место это массив из двух элементов, где первый элемент это название места, второй – точка на карте (массив из двух чисел x и y).
point – текущая точка на карте. Массив из двух элементов-координат x и y.

## Примеры

```
const locations = [
  ['Park', [10, 5]],
  ['Sea', [1, 3]],
  ['Museum', [8, 4]],
];

const currentPoint = [5, 5];

// Если точек нет, то возвращается null
getTheNearestLocation([], currentPoint); // null

getTheNearestLocation(locations, currentPoint); // ['Museum', [8, 4]]
```

[МОЕ РЕШЕНИЕ](https://github.com/from0toweb/hexlet_tasks/blob/arrayTask_destructuring/script.js)

[&#x2190; Назад](https://github.com/from0toweb/hexlet_tasks/tree/master)
