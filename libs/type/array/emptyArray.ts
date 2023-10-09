/**
 * Creates an empty array and can restrict the array type.
 *
 * @category Array
 * @param {[]} arr Array of restricted types
 * @return {[]} Return an empty array
 * @example
 *
 * emptyArray() // => []
 * emptyArray<string>() // => string[]
 */

function emptyArray<T>(arr?: T[]): T[] {
    return arr ? arr : new Array<T>(0);
}

export default emptyArray;