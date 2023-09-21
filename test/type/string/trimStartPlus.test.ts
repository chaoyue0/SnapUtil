import { expect, test } from 'vitest';
import trimStartPlus from "../../../libs/type/string/trimStartPlus";

// trimPlus
test('trimStartPlus', () => {
    expect(trimStartPlus('  123')).toBe('123');
});

test('trimStartPlus', () => {
    expect(trimStartPlus('  123 ')).toBe('123 ');
});