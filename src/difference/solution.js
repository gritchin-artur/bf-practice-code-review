/** .........
 * Repeated values are not duplicated
 * in the return value, and the order of result
 * values are determined by the first array
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to exclude.
 * @returns {Array} Returns the new array of filtered
 */

export const difference = (array = [], values = []) => {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!values.includes(array[i]) && !newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
};
