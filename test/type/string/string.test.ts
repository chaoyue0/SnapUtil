import { expect, test } from 'vitest';
import {trimPlus} from "../../../libs/type/string";

// trimPlus
test('trimPlus-start', () => {
    expect(trimPlus('  123')).toBe('123');
});
test('trimPlus-end', () => {
    expect(trimPlus('123  ')).toBe('123');
});
test('trimPlus-start and end ', () => {
    expect(trimPlus('  123  ')).toBe('123');
});
test('trimPlus-start-q ', () => {
    expect(trimPlus('qqx123','q')).toBe('x123');
});
test('trimPlus-end-q ', () => {
    expect(trimPlus('123qqq','q')).toBe('123');
});