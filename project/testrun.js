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
		let ascii = /[`! @#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

		if (letter === "z") {
			newArr.push("a");
			continue;
		}

		if (letter === "Z") {
			newArr.push("A");
			continue;
		}

		if (ascii.test(letter)) {
			newArr.push(letter);
			continue;
		}

		const alphaIndex = alphabets.indexOf(letter);

		if (alphaIndex === -1) {
			const uppIndex = uppAlphabets.indexOf(letter);
			const newLetter = uppAlphabets[uppIndex + 1];
			newArr.push(newLetter);
			continue;
		}

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

const analyzeArray = function (arr) {
	const _findAverage = (arr) => {
		const total = arr.reduce((acc, item) => acc + item, 0);
		return total / arr.length;
	};

	const _findMin = (arr) => {
		arr.sort((a, b) => (a > b ? 1 : -1));
		return arr[0];
	};

	const _findMax = (arr) => {
		arr.sort((a, b) => (a > b ? -1 : 1));
		return arr[0];
	};

	let _average = _findAverage(arr);
	let _min = _findMin(arr);
	let _max = _findMax(arr);
	let _length = arr.length;

	if ()

	return {
		get average() {
			return _average;
		},
		get min() {
			return _min;
		},
		get max() {
			return _max;
		},
		get length() {
			return _length;
		},
	};
};

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
