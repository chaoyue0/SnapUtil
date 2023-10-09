/**
 * Intercept the `array` from start to end, return a new Array.
 *
 * @category String
 * @param {T[]} array Need be intercepted Array
 * @param {number} start Intercept starting position
 * @param {number} end Intercept ending position
 * @return {T[]} Returns the intercepted Array.
 * @example
 *
 * slicePlus([1,2,3], 0, 1)
 * // => [1,2]
 *
 * slicePlus([1,2,3,4], -1, 2)
 * // => []
 *
 * slicePlus([1,2,3,4,5], -3, 5)
 * // => [3,4,5]
 */

const slicePlus = <T>(array: T[], start: number, end: number): T[] => {
    let length = array == null ? 0 : array.length
    if (!length) {
        return [];
    }
    start = start == null ? 0 : start;
    end = end === undefined ? length : end;

    if (start < 0) {
        start = -start > length ? 0 : (length + start);
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : ((end - start) >>> 0);
    start >>>= 0;

    let index = -1;
    const result = new Array(length);
    while(++index < length) {
        result[index] = array[index + start];
    }
    return result;
}

export default slicePlus;