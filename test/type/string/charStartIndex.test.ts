import { expect, test } from 'vitest';
import charStartIndex from "../../../libs/type/string/charStartIndex";

test('charStartIndex', () => {
    expect(charStartIndex(' 123','')).toBe(0);
});