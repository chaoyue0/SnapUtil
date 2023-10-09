import {expect, test} from "vitest";
import emptyArray from "../../../libs/type/array/emptyArray";

let arr = emptyArray();
const demo = [1,'2',true,undefined,null];
arr = demo;
test('arr', () => {
    expect(Array.isArray(arr)).toBe(true);
});

let arr_string = emptyArray<string>();
test('arr_string', () => {
    expect(arr_string).toBe('[]');
});