function capitalize(str) {
	const arr1 = str.split(" ");
	const newStr = arr1.join("");
	const arr = Array.from(newStr);
	arr[0] = arr[0].toUpperCase();
	return arr.join("");
}

function reverseString(str) {
	const arr = Array.from(str);
	const newArr = [];
	arr.forEach((char, index) => {
		newArr.push(arr[arr.length - (index + 1)]);
	});
	return newArr.join("");
}

const calculator = (function () {
	const add = (x, y) => +x + +y;
	const subt = (x, y) => +x - +y;
	const div = (x, y) => +x / +y;
	const mult = (x, y) => +x * +y;

	return { add, subt, div, mult };
})();

const caesarCipher = function (str) {
	const alphabets = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];

	const uppAlphabets = alphabets.map((letter) => letter.toUpperCase());

	let newArr = [];

	let arr = Array.from(str);

	for (const letter of arr) {
		let ascii = /[^\p{L}\s]/gu;

		if (letter === "z") {
			newArr.push("a");
			continue;
		}

		if (ascii.test(letter)) continue;

		const alphaIndex = alphabets.indexOf(letter);
		const newLetter = alphabets[alphaIndex + 1];
		newArr.push(newLetter);
	}

	return newArr.join("");

	// get the first alphabet
	// find the position of that alphabet in alphabet array
	// get next index alphabet, push to a new array
	// return new array

	// make a isUpperCase function
	// lowercase it then search in the array, return it then uppercase it
	// push

	// make a isAscii function
	// continue
};

export { capitalize, reverseString, calculator, caesarCipher };
