import { stringToArray } from "../string";

/**
 * Search the `str` from right to left to find the index where the target value is located.
 *
 * @category String
 * @param {string} str Find value from str
 * @param {string} target Value to find
 * @return {number} Returns the index of the first unmatched string symbol.
 * @example
 *
 * charEndIndex('abc', 'b')
 * // => 1
 *
 * charEndIndex(' abc', '')
 * // => 3
 */

const charEndIndex = (str: string, target: string): number => {
    let index = str.length - 1;
    const arr = stringToArray(str).reverse();
    for (let item of arr) {
        if (item === target) {
            index--;
        } else {
            return index;
        }
    }
    return index;
}

export default charEndIndex;