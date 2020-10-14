import _ from 'lodash';

export default (arr1, arr2) => {
    let result = [];

    for (const elem of _.uniq(arr1)) {
        for (const elem2 of _.uniq(arr2)) {
            if (elem === elem2) {
                result.push(elem);
            }
        }
    }
    return result.length;
};
