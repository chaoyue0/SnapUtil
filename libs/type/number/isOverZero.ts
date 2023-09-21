import { isBaseType } from "../common";
import { reOverZero } from "../../regular/general";

/**
 * Determine whether the value is over 0,include String or Number.
 *
 * @category Number
 * @param {unknown} val Checked value
 * @return {boolean} Return `true` if val pass the isOverZero check
 * @example
 *
 * isOverZero(-1) // => false
 * isOverZero(1) // => true
 * isOverZero('1') // => true
 */

const isOverZero = (val: unknown): val is string | number => {
    if (isBaseType(val)) {
        if (typeof val === 'string') {
            return reOverZero.test(val);
        }
        if (typeof val === 'number') {
            return val > 0;
        }
    }
    return false;
};

export default isOverZero;