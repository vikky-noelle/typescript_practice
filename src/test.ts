import { fibonacci } from "../src/index";

test('My fibonacci program', () => {
    expect(fibonacci(3)).toBe(1);
    expect(fibonacci(5)).toBe(3);
    expect(fibonacci(11)).toBe(55);
    expect(fibonacci(0)).toBe("invalid input");
});