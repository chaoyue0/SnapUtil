import { expect, test } from 'vitest';
import charEndIndex from "../../../libs/type/string/charEndIndex";

test('charEndIndex', () => {
    expect(charEndIndex(' 123','')).toBe(3);
});