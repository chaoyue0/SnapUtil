import {expect, test} from "vitest";
import isZero from "../../../libs/type/number/isZero";

test('isZero-number_0', () => {
    expect(isZero(0)).toBe(true);
});
test('isZero-number_1', () => {
    expect(isZero(1)).toBe(false);
});
test('isZero-number_-1', () => {
    expect(isZero(-1)).toBe(false);
});
test('isZero-number_0.0', () => {
    expect(isZero(0.0)).toBe(true);
});
test('isZero-string_0', () => {
    expect(isZero('0')).toBe(true);
});
test('isZero-string_1', () => {
    expect(isZero('1')).toBe(false);
});
test('isZero-string_-1', () => {
    expect(isZero('-1')).toBe(false);
});
test('isZero-string_a', () => {
    expect(isZero('a')).toBe(false);
});
test('isZero-string_0.00000', () => {
    expect(isZero('0.00000')).toBe(true);
});
test('isZero-string_0.a0a', () => {
    expect(isZero('0.a0a')).toBe(false);
});
test('isZero-null', () => {
    expect(isZero(null)).toBe(false);
});
test('isZero-undefined', () => {
    expect(isZero(undefined)).toBe(false);
});
test('isZero-object', () => {
    expect(isZero({})).toBe(false);
});