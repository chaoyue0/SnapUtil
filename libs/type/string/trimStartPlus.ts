import charStartIndex from '../string/charStartIndex';

/**
 * Removes leading whitespace or specified characters from left to right in `string`.
 *
 * @category String
 * @param {string} str The string to trim.
 * @param {string} target The characters to trim.
 * @return {string} Returns the trimmed string.
 * @example
 *
 * charStartIndex(' abc ', '')
 * // => 'abc '
 *
 * charStartIndex('_abc_', '_')
 * // => 'abc_'
 */

const trimStartPlus = (str: string, target?: string):string => {
    if (str && target === undefined) {
        return str.trimStart();
    }
    const start = charStartIndex(str, target);
    return str.slice(start);
}

export default trimStartPlus;