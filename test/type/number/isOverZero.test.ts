import { expect, test } from "vitest";
import isOverZero from "../../../libs/type/number/isOverZero";

test('isOverZero-number_0', () => {
    expect(isOverZero(0)).toBe(false);
});
test('isOverZero-number_1', () => {
    expect(isOverZero(1)).toBe(true);
});
test('isOverZero-number_-1', () => {
    expect(isOverZero(-1)).toBe(false);
});
test('isOverZero-number_1.1', () => {
    expect(isOverZero(1.1)).toBe(true);
});
test('isOverZero-number_-1.1', () => {
    expect(isOverZero(-1.1)).toBe(false);
});
test('isOverZero-string_0', () => {
    expect(isOverZero('0')).toBe(false);
});
test('isOverZero-string_1', () => {
    expect(isOverZero('1')).toBe(true);
});
test('isOverZero-string_-1', () => {
    expect(isOverZero('-1')).toBe(false);
});
test('isOverZero-string_1.1', () => {
    expect(isOverZero('1.1')).toBe(true);
});
test('isOverZero-string_-1.1', () => {
    expect(isOverZero('-1.1')).toBe(false);
});
test('isOverZero-string_-1.ax1', () => {
    expect(isOverZero('-1.ax1')).toBe(false);
});
test('isOverZero-string_1.ax1', () => {
    expect(isOverZero('1.ax1')).toBe(false);
});
test('isOverZero-null', () => {
    expect(isOverZero(null)).toBe(false);
});
test('isOverZero-undefined', () => {
    expect(isOverZero(undefined)).toBe(false);
});
test('isOverZero-object', () => {
    expect(isOverZero({})).toBe(false);
});