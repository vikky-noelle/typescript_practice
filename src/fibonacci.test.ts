import { mathFibonacci, dpFibonacci, redisMathFibonacci, redisDpFibonacci } from "../src/fibonacci";

describe("mathFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", async function () {
            expect(await mathFibonacci(0)).toBe(0);
            expect(await mathFibonacci(1)).toBe(1);
            expect(await mathFibonacci(2)).toBe(1);
            expect(await mathFibonacci(3)).toBe(2);
            expect(await mathFibonacci(5)).toBe(5);
            expect(await mathFibonacci(10)).toBe(55);
        });
    });

    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", async function () {
            expect(await mathFibonacci(-2)).toBe("invalid input");
        });
    });
});

describe("dpFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", async function () {
            expect(await dpFibonacci(10)).toBe(55);
            expect(await dpFibonacci(1)).toBe(1);
            expect(await dpFibonacci(2)).toBe(1);
            expect(await dpFibonacci(3)).toBe(2);
            expect(await dpFibonacci(5)).toBe(5);
        });
    });


    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", async function () {
            expect(await dpFibonacci(-1)).toBe("invalid input");
        });
    });
});

describe("redisMathFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", async function () {
            expect(await redisMathFibonacci(0)).toBe(0);
            expect(await redisMathFibonacci(1)).toBe(1);
            expect(await redisMathFibonacci(2)).toBe(1);
            expect(await redisMathFibonacci(3)).toBe(2);
            expect(await redisMathFibonacci(5)).toBe(5);
            expect(await redisMathFibonacci(10)).toBe(55);
        });
    });

    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", async function () {
            expect(await redisMathFibonacci(-2)).toBe("invalid input");
        });
    });
});

describe("redisDpFibonacci()", function () {
    describe("calling functions with correct inputs", function () {
        it("should not throw any error", async function () {
            expect(await redisDpFibonacci(10)).toBe(55);
            expect(await redisDpFibonacci(1)).toBe(1);
            expect(await redisDpFibonacci(2)).toBe(1);
            expect(await redisDpFibonacci(3)).toBe(2);
            expect(await redisDpFibonacci(5)).toBe(5);
        });
    });


    describe("calling functions with invalid inputs", function () {
        it("should return invalid input", async function () {
            expect(await redisDpFibonacci(-1)).toBe("invalid input");
        });
    });
});
