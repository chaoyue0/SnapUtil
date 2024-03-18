import {expect, test} from "vitest";
import arrDiff from "../../../libs/type/array/arrDiff";

test('arrDiff', () => {
    expect(arrDiff([1,2,3],[1,2])).toBe([3]);
});