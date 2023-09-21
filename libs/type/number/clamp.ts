/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @category Number
 * @param {number | string} number The number to clamp.
 * @param {number | string} lower The lower bound.
 * @param {number | string} upper The upper bound.
 * @return {number} Return the clamped number.
 * @example
 *
 * * clamp(-10, -5, 5)
 *  * // => -5
 *
 *   * clamp(10, -5, 5)
 *  * // => 5
 */


export const clamp = (number: number | string,lower: number | string,upper: number | string): number => {
    number = +number;
    lower = +lower;
    upper = +upper;
    lower = lower === lower ? lower : 0;
    upper = upper === upper ? upper : 0;
    if (number === number) {
        number = number <= upper ? number : upper;
        number = number >= lower ? number : lower;
    }
    return number;
}