/** .........
 * Creates an array of values that are in both the first
 * and the second arrays.
 *
 * @param {Array} [array=[]] - The array to inspect.
 * @param {Array} [values=[]] - The values to include.
 * @returns {Array} Returns the new array of filtered
 */

export const intersection = (array = [], values = []) => {
    const newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (values.includes(array[i]) && !newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }
    return newArr;
};
