import { mathFibonacci, dpFibonacci } from "../src/fibonacci";

describe("mathFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", function () {
            expect(mathFibonacci(0)).toBe(0);
            expect(mathFibonacci(1)).toBe(1);
            expect(mathFibonacci(2)).toBe(1);
            expect(mathFibonacci(3)).toBe(2);
            expect(mathFibonacci(5)).toBe(5);
            expect(mathFibonacci(10)).toBe(55);
        });
    });

    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", function () {
            expect(mathFibonacci(0)).toBe("invalid input");
        });
    });
});

describe("dpFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", function () {
            expect(dpFibonacci(10)).toBe(55);
            expect(dpFibonacci(1)).toBe(1);
            expect(dpFibonacci(2)).toBe(1);
            expect(dpFibonacci(3)).toBe(2);
            expect(dpFibonacci(5)).toBe(5);
        });
    });


    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", function () {
            expect(dpFibonacci(-1)).toBe("invalid input");
        });
    });
});
