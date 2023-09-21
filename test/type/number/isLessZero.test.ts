import {expect, test} from "vitest";
import isLessZero from "../../../libs/type/number/isLessZero";

test('isLessZero-number_0', () => {
    expect(isLessZero(0)).toBe(false);
});
test('isLessZero-number_1', () => {
    expect(isLessZero(1)).toBe(false);
});
test('isLessZero-number_-1', () => {
    expect(isLessZero(-1)).toBe(true);
});
test('isLessZero-number_1.1', () => {
    expect(isLessZero(1.1)).toBe(false);
});
test('isLessZero-number_-1.1', () => {
    expect(isLessZero(-1.1)).toBe(true);
});
test('isLessZero-string_0', () => {
    expect(isLessZero('0')).toBe(false);
});
test('isLessZero-string_1', () => {
    expect(isLessZero('1')).toBe(false);
});
test('isLessZero-string_-1', () => {
    expect(isLessZero('-1')).toBe(true);
});
test('isLessZero-string_1.1', () => {
    expect(isLessZero('1.1')).toBe(false);
});
test('isLessZero-string_-1.1', () => {
    expect(isLessZero('-1.1')).toBe(true);
});
test('isLessZero-string_-1.ax1', () => {
    expect(isLessZero('-1.ax1')).toBe(false);
});
test('isLessZero-string_1.ax1', () => {
    expect(isLessZero('1.ax1')).toBe(false);
});
test('isLessZero-null', () => {
    expect(isLessZero(null)).toBe(false);
});
test('isLessZero-undefined', () => {
    expect(isLessZero(undefined)).toBe(false);
});
test('isLessZero-object', () => {
    expect(isLessZero({})).toBe(false);
});