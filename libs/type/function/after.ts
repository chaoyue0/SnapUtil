/**
 * call `func` after calling  'after' function n times.
 *
 * @category Function
 * @param {number} n The frequency to call.
 * @param {Function} func Need be called function.
 * @return {Function} Return need be called function.
 * @example
 *
 * function fun() {
 *     console.log('called');
 * }
 *
 * const doSomething = after(3,fun);
 *
 * // 模拟按钮点击事件
 * doSomething() // 不会执行
 * doSomething() // 不会执行
 * doSomething() // => called
 *
 *
 */


const after = (n: number, func: (...args: any[]) => any):(...args: any[]) => any  => {
    if (typeof func === 'function') {
        throw new TypeError('Expected a function');
    }
    n = n < 0 ? -n : n;
    return function(...args: any[]): any | undefined {
        if (--n < 1) {
            return (func as (...args: any[]) => any).apply(this, args);
        }
    }
}

export default after;