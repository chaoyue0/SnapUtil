import { stringToArray } from "../string";

/**
 * Search the `str` from left to right to find the index where the target value is located.
 *
 * @category String
 * @param {string} str Find value from str
 * @param {string} target Value to find
 * @return {number} Returns the index of the first unmatched string symbol.
 * @example
 *
 * charStartIndex('abc', 'b')
 * // => 1
 *
 * charStartIndex(' abc', '')
 * // => 0
 */

const charStartIndex = (str: string, target: string): number => {
    let index = 0;
    const arr = stringToArray(str);
    for (let item of arr) {
        if (item === target) {
            index++;
        } else {
            return index;
        }
    }
    return index;
}

export default charStartIndex;