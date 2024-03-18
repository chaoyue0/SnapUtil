import {expect, test} from "vitest";
import arrDiff from "../libs/type/array/arrDiff";
import myNew from "../new/new";

const toStringify = (str: {}) => {
   return  JSON.stringify(str);
}

function fun() {
    return {
        a:1,
    }
}

test('myNew', () => {
    expect(toStringify(myNew(fun))).toBe(toStringify({a: 1}));
});