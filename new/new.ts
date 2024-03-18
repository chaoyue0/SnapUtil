import { isObject } from "../libs/type/general";

/**
 * Create an instance of an object
 *
 * @param  constructor Constructor function
 * @return  Return object
 * @example
 *
 * function fun() {
 *     return {
 *         a：1，
 *     }
 * }
 * myNew(fun) // => {a： 1}
 */

type Constructor<T> = (...arg: any[]) => T;

const myNew = <T>(constructor: Constructor<T>, ...args: any[]) => {
    if (typeof constructor !== 'function') {
        throw 'the first param must be a function';
    }

    const newObj = Object.create(constructor.prototype);
    const argsArr = [].slice.call(args, 1);
    const result = constructor.apply(newObj, argsArr);

    if (isObject(result)) {
        return result;
    } else {
        return newObj;
    }
}

export default myNew;