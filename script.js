const locations = [
    ["Park", [10, 5]],
    ["Sea", [1, 3]],
    ["Museum", [8, 4]],
];

const currentPoint = [1, 3];

const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;

    return Math.sqrt(xs ** 2 + ys ** 2);
};

const getTheNearestLocation = (location, point) => {
    if (!location.length) {
        return null;
    }
    const [[, firstPoint], ,] = location;
    let resultPoint = getDistance(point, firstPoint);
    let result;

    for (const loc of location) {
        const [, pointLoc] = loc;

        if (getDistance(point, pointLoc) < resultPoint) {
            resultPoint = getDistance(point, pointLoc);
            result = loc;
        }
    }
    return result;
};

console.log(getTheNearestLocation([], currentPoint));
console.log(getTheNearestLocation(locations, currentPoint));
