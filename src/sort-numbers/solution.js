/** .........
 * Returns a new array without modifying the original array.
 *
 * @param {number[]} [arrayOfNumbers=[]] - the array of numbers to sort
 * @returns {number[]} a new array with the same numbers, but sorted
 */

export const sortNumbers = (arrayOfNumbers = []) => {
    const newArr = [...arrayOfNumbers.sort((a, b) => a - b)];

    return newArr;
};
