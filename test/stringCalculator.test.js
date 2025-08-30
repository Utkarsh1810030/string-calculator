const { add } = require("../src/stringCalculator");

describe("String Calculator", () => {
    test("empty string returns 0", () => {
        expect(add("")).toBe(0);
    });

    test("single number returns itself", () => {
        expect(add("7")).toBe(7);
        expect(add("42")).toBe(42);
    });

    test("two numbers, comma-separated", () => {
        expect(add("1,8")).toBe(9);
        expect(add("11,2")).toBe(13);
    });

    test("handles any amount of numbers", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("1,2,3,4,5, 100 ,200, 300")).toBe(615);
    });

    test("handles new lines with commas", () => {
        expect(add("1\n2,5")).toBe(8);
        expect(add("4\n5\n8")).toBe(17);
    });

    test("supports custom delimiter header //;\\n", () => {
        expect(add("//:\n1:2")).toBe(3);
        expect(add("//$\n2$3$4")).toBe(9);
    });

    test("custom delimiter works alongside newlines", () => {
        expect(add("//#\n1#2\n3")).toBe(6);
    });
});