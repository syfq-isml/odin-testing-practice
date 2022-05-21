import {
	capitalize,
	reverseString,
	calculator,
	caesarCipher,
} from "./testrun.js";

describe("capitalize", () => {
	test("first character capitalized", () => {
		expect(capitalize("caesar")).toBe("Caesar");
	});
	test("removes whitespace", () => {
		expect(capitalize(" bob")).toBe("Bob");
	});
});

describe("reverseString", () => {
	test("reverses string", () => {
		expect(reverseString("Piplup")).toBe("pulpiP");
	});
});

describe("calculator", () => {
	test("adds correctly", () => {
		expect(calculator.add(2, 4)).toBe(6);
	});
	test("substracts correctly", () => {
		expect(calculator.subt(5, 3)).toBe(2);
	});
	test("multiplies correctly", () => {
		expect(calculator.mult(4, 5)).toBe(20);
	});
	test("divides correctly", () => {
		expect(calculator.div(6, 3)).toBe(2);
	});
	test("accepts strings", () => {
		expect(calculator.add("2", 5)).toBe(7);
	});
	test("accepts large numbers", () => {
		expect(calculator.mult(1000000, 1000000)).toBe(1000000000000);
	});
});

describe("caesarCipher", () => {
	test("shifts aplphabets correctly", () => {
		expect(caesarCipher("abcdef")).toBe("bcdefg");
	});
	test("wraps z to a correctly", () => {
		expect(caesarCipher("xyzabc")).toBe("yzabcd");
	});
	test("returns the same case", () => {
		expect(caesarCipher("aBcDeF")).toBe("bCdEfG");
	});
	test("keeps punctuation in correct place", () => {
		expect(caesarCipher("ab, cdef")).toBe("bc, defg");
	});
});
