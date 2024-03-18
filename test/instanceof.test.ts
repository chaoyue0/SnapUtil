import {expect, test} from "vitest";
import myInstanceof from "../instanceof/instanceof";

test('myInstanceof-Array', () => {
    expect(myInstanceof([], Array)).toBe(true);
});

test('myInstanceof-Object', () => {
    expect(myInstanceof({}, Object)).toBe(true);
});