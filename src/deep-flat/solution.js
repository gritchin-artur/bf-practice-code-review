/** .........
 * Deeper flat array.
 *
 * @param {Array} [array=[]] - The array to flatten.
 * @returns {Array} Returns the new flattened array.
 */
export const deepFlat = (array = []) => {
    const newArr = [];

    for (let el of array) {
        if (Array.isArray(el)) {
            newArr.push(...deepFlat(el));
        } else {
            newArr.push(el);
        }
    }

    return newArr;
    // return array.flat(Infinity);
};
