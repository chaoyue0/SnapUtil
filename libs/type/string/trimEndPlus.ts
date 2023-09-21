import charEndIndex from '../string/charEndIndex';

/**
 * Removes leading whitespace or specified characters from right to left in `string`.
 *
 * @category String
 * @param {string} str The string to trim.
 * @param {string} target The characters to trim.
 * @return {string} Returns the trimmed string.
 * @example
 *
 * charStartIndex(' abc ', '')
 * // => ' abc'
 *
 * charStartIndex('_abc_', '_')
 * // => '_abc'
 */


const trimEndPlus = (str: string, target?: string):string => {
    if (str && target === undefined) {
        return str.trimEnd();
    }
    const end = charEndIndex(str, target);
    return str.slice(0, end);
}

export default trimEndPlus;