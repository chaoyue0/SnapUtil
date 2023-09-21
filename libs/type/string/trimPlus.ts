import charStartIndex from '../string/charStartIndex';
import charEndIndex from '../string/charEndIndex';

/**
 * Removes leading and trailing whitespace or specified characters from `string`.
 *
 * @category String
 * @param {string} str The string to trim.
 * @param {string} target The characters to trim.
 * @return {string} Returns the trimmed string.
 * @example
 *
 * charStartIndex(' abc ', '')
 * // => abc
 *
 * charStartIndex('_abc_', '_')
 * // => abc
 */

const trimPlus = (str: string, target?: string): string => {
    if (str && target === undefined) {
        return str.trim();
    }
    const start = charStartIndex(str, target);
    const end = charEndIndex(str, target) + 1;
    return str.slice(start, end);
}

export default trimPlus;