import { expect, test } from 'vitest';
import trimEndPlus from "../../../libs/type/string/trimEndPlus";

// trimPlus
test('trimEndPlus', () => {
    expect(trimEndPlus('123 ')).toBe('123');
});

test('trimEndPlus', () => {
    expect(trimEndPlus(' 123 ')).toBe(' 123');
});