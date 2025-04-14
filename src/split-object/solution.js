/** .........
 * Splits an object into multiple objects with one key/value pair each.
 *
 * @param {Object} [toSeparate={}] - The object to split into key/value pairs.
 * @returns {Array} Returns a new array with one entry for each key/value pair.
 */

export const splitObject = (toSeparate = {}) => {
    const newArr = [];

    for (let [key, value] of Object.entries(toSeparate)) {
        newArr.push({ [key]: value });
    }

    return newArr;
};
