const { add } = require("../src/stringCalculator");

describe("String Calculator", () => {
    test("empty string returns 0", () => {
        expect(add("")).toBe(0);
    });

    test("single number returns itself", () => {
        expect(add("7")).toBe(7);
        expect(add("42")).toBe(42);
    });
});