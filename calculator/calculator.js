function add (a) {
	var sum = a;
	for (i = 1; i < arguments.length; i++) {
		sum += arguments[i];
	};
	return sum;
};

function subtract (a) {
	var diff = a;
	for (i = 1; i < arguments.length; i++) {
		diff -= arguments[i];
	};
	return diff;
};

function sum (a) {
	const sumTotal = (accumulator, currentValue) => accumulator + currentValue;
	return a.reduce(sumTotal, 0);
};

function multiply (a) {
	const total = (accumulator, currentValue) => accumulator * currentValue;
	return a.reduce(total);
};

function power(a, b) {
	var total = a;
	for (i = 1; i < b; i++) {
		total *= a;
	};
	return total;
};

function factorial(a) {
	var total = a;
	for (i = 1; i < a; i++) {
		total *= (a - i);
	};
	if (total === 0) {
		return 1;
	} else {
		return total;
	};
	
};

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}