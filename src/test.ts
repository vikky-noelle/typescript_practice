import { math_fibonacci, dp_fibonacci } from "../src/index";

test('My math_fibonacci program', () => {
    expect(math_fibonacci(0)).toBe(0);
    expect(math_fibonacci(1)).toBe(1);
    expect(math_fibonacci(2)).toBe(1);
    expect(math_fibonacci(3)).toBe(2);
    expect(math_fibonacci(5)).toBe(5);
    expect(math_fibonacci(10)).toBe(55);
    expect(math_fibonacci(-1)).toBe("invalid input");
});

test('My dp_fibonacci program', () => {
    expect(dp_fibonacci(0)).toBe(0);
    expect(dp_fibonacci(1)).toBe(1);
    expect(dp_fibonacci(2)).toBe(1);
    expect(dp_fibonacci(3)).toBe(2);
    expect(dp_fibonacci(5)).toBe(5);
    expect(dp_fibonacci(10)).toBe(55);
    expect(dp_fibonacci(-1)).toBe("invalid input");
});
