import { isBaseType } from "../common";
import { reZero } from "../../regular/general";

/**
 * Determine whether the value is 0,include String or Number.
 *
 * @category Number
 * @param {unknown} val Checked value
 * @return {boolean} Return `true` if val pass the isZero check
 * @example
 *
 * isZero(1) // => false
 * isZero(0) // => true
 * isZero('0') // => true
 */

const isZero = (val: unknown): val is string | number => {
    if (isBaseType(val)) {
        if (typeof val === 'string') {
            return reZero.test(val);
        }
        if (typeof val === 'number') {
            return val === 0 || reZero.test(val.toString());
        }
    }
    return false;
};

export default isZero;