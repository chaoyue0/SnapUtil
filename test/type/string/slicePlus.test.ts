import {expect, test} from "vitest";
import slicePlus from "../../../libs/type/string/slicePlus";

test('slicePlus1', () => {
    expect(slicePlus<number>([1,2,3],0,1)).toStrictEqual([1]);
});

test('slicePlus2', () => {
    expect(slicePlus<number>([1,2,3,4],-1,1)).toStrictEqual([]);
});


test('slicePlus3', () => {
    expect(slicePlus([1,2,3,4,5], -3, 5)).toStrictEqual([3,4,5]);
});