// Give back minimum number of bills
// Can only be 2, 5, 10 bills
// Can't give change for 1

const change = (cash) => {
	let change = {
		ten: 0,
		five: 0,
		two: 0,
	};

	// Round down to avoid floating point errors
	// cash = Math.floor(cash);

	// Case of 1$ bill
	if (cash <= 1 || cash === 1) {
		return null;
	}

	// Amount of 10$ bills needed
	change.ten = Math.floor(cash / 10);
	cash %= 10;
	// Amount of 5$ bills needed
	change.five = Math.floor(cash / 5);
	cash %= 5;
	// Amount of 2$ bills needed
	change.two = Math.floor(cash / 2);
	cash %= 2;

	if (cash !== 0) {
		return 'Cannot give change for this amount';
	}

	// Alternative solution:
	// while (cash > 0) {
	// 	if (cash >= 10) {
	// 		change.ten++;
	// 		cash -= 10;
	// 	} else if (cash >= 5) {
	// 		change.five++;
	// 		cash -= 5;
	// 	} else if (cash >= 2) {
	// 		change.two++;
	// 		cash -= 2;
	// 	} else {
	// 		return 'Cannot give change for this amount';
	// 	}
	// }

	return change;
};

console.log('Input 1    - Result: ', change(1)); // null
console.log('Input -87  - Result: ', change(-87)); // null
console.log('Input 2    - Result: ', change(2)); // { ten: 0, five: 0, two: 1 }
console.log('Input 5    - Result: ', change(5)); // { ten: 0, five: 1, two: 0 }
console.log('Input 10   - Result: ', change(10)); // { ten: 1, five: 0, two: 0 }
console.log('Input 42   - Result: ', change(42)); // { ten: 4, five: 0, two: 1 }
console.log('Input 44   - Result: ', change(44)); // { ten: 4, five: 0, two: 2 }
console.log('Input 57   - Result: ', change(57)); // { ten: 5, five: 1, two: 1 }
console.log('Input 42.5 - Result: ', change(42.5)); // Remains 0.5, cannot give change || { ten: 4, five: 0, two: 1 } - Round down
console.log('Input 63   - Result: ', change(63)); // Remains 1, cannot give change