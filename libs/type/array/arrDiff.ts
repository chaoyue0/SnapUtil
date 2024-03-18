/**
 * Compare two arrays for equality and returns the difference element
 *
 * 1、数组的长度
 * 2、数组元素的顺序(暂不考虑)
 * 3、数组的嵌套情况
 *
 * @param arr
 * @param otherArr
 */
const arrDiff = (arr: unknown[], otherArr: unknown[]):unknown[] => {
    if (otherArr.length === 0) {
        return arr;
    }
    if (arr.length === 0) {
        return otherArr;
    }
    const one = arr.flat(Infinity);
    const two = otherArr.flat(Infinity);
    let len1 = one.length;
    let len2 = two.length;
    let res = [];
    let index = -1;
    while (++index < len1) {

    }
    return res;
}

export default arrDiff;