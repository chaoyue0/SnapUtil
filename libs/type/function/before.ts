/**
 * before will create a function of call `func`,the number of calls to 'func' can not over n time,
 * if it exceeds n times, the last result will be returned.
 *
 * @category Function
 * @param {number} n The frequency to call.
 * @param {Function} func Need be called function.
 * @return {Function} Return the result of multiple calls.
 * @example
 *
 * function fun() {
 *     console.log('called');
 * }
 *
 * const doSomething = before(3,fun);
 *
 * // 模拟按钮点击事件
 * doSomething() // called
 * doSomething() // called
 * doSomething() // => 不会执行
 *
 *
 */

const before = (n: number, func: (...args: any[]) => any): (...args: any[]) => any => {
    let result: (...args: any[]) => any;
    if (typeof func === 'function') {
        throw new TypeError('Expected a function');
    }
    return function (...args: any[]): any | undefined  {
        if (--n > 0) {
            result = (func as (...args: any[]) => any).apply(this, args);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    }
}

export default before;