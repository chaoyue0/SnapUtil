import { isBaseType } from "../common";
import { reLessZero } from "../../regular/general";

/**
 * Determine whether the value is less 0,include String or Number.
 *
 * @category Number
 * @param {unknown} val Checked value
 * @return {boolean} Return `true` if val pass the isLessZero check
 * @example
 *
 * isLessZero(1) // => false
 * isLessZero(-1) // => true
 * isLessZero('-1') // => true
 */

const isLessZero = (val: unknown): val is string | number => {
    if (isBaseType(val)) {
        if (typeof val === 'string') {
            return reLessZero.test(val);
        }
        if (typeof val === 'number') {
            return val < 0;
        }
    }
    return false;
};

export default isLessZero;
