const LibSys = require('./lendconsole.js');

describe ('Creates Book with correct format', () => { /*Creates a newBook ['Index: Calculated value', ' Name: firstInput', ' Author: second input', ' ISBN: third input']
										
														with input 'Name, Author, 10 or 13 numbers'			*/
	test('Creates book with correct ISBN and calculated index', () => {
		let store = [];
		expect(LibSys.createBook(store,'n,c,9000002192')).toEqual(['Index: 1',' Name: n',' Author: c',' ISBN: 9000002192']);	
	});
	test('Will not create book with incorrect format', () => {
		let store = ['k'];
		const expected = ['Index: 2',' Name: n',' Author: c',' ISBN: 80'];
		expect(LibSys.createBook(store,'n,c')).not.toBe(expected);
	});	
	test('Will not create book with incorrect ISBN', () => {
		let store = ['k'];
		const expected = ['Index: 2',' Name: n',' Author: c',' ISBN: 80'];
		expect(LibSys.createBook(store,'n,c,80')).not.toBe(expected);
	});	
})

describe ('Adds book to store', () => {

	test('Pushes new book to store', () => {
		let store = ['k'];
		const book = ['Index: 2',' Name: n',' Author: c',' ISBN: 80'];
		expect(LibSys.addBook(store, book)).toEqual(book);
	});
});

describe ('Displays & returns books in store if books are in store', () => {

	test('Returns books in store when books are in store', () => {
		let store = ['k'];
		expect(LibSys.displayAvailableBooks(store)).toBe(store);
	});
	test('Does not return books when books are not in store', () => {
		let store = [];
		expect(LibSys.displayAvailableBooks(store)).not.toBe(store);
	});
});

describe ('Lends book from store', () => {

	test('Lends book to lentBooks array from store array if store has books, checks if book is now in lentArray', () => {
		let store = [['Index: 1', ' Name: Tendril', ' Author: Miracle Nmesoma', ' ISBN:0000000000'], ['Index: 2',' Name: Lalala',' Author: Author',' ISBN: 8008800880']];
		let lentBooks = [];
		expect(LibSys.lendBook(store, 1, lentBooks)).toContainEqual(['Index: 1', ' Name: Tendril', ' Author: Miracle Nmesoma', ' ISBN:0000000000']);
	});
	test('Does not attempt to lend book if store has none', () => {
		let store = [];
		let lentBooks = [];
		expect(LibSys.lendBook(store, 1, lentBooks)).not.toBe(['Index: 1', ' Name: Tendril', ' Author: Miracle Nmesoma', ' ISBN:0000000000']);
	});
});

describe ('Returns list of lent books if there are books in lentBooks Array', () => {

	test('Returns list of lent books when books are in lentBooks array', () => {
	let lentBooks = [['Index: 2',' Name: Lalala',' Author: Author',' ISBN: 8008800880']]
	expect(LibSys.displayLentBooks(lentBooks)).toEqual(lentBooks);
	});
	test('Does not return lentBooks if books are not in lentBooks array', () => {
	let lentBooks = [];
	expect(LibSys.displayLentBooks(lentBooks)).not.toBe(lentBooks);
	});
});

describe ('Returns book to store', () => {

	test('Returns book to store from lentBooks if lentBooks has books, checks if book is now in store', () => {
		let store = [];
		let lentBooks = [['Index: 1', ' Name: A Raisin in the Sun', ' Author: Umm...', ' ISBN:0000000000'], ['Index: 2',' Name: Lalala',' Author: GoshIDontRead', ' ISBN: 8008800880']];
		expect(LibSys.returnBook(lentBooks, 2, store)).toContainEqual(['Index: 2',' Name: Lalala',' Author: GoshIDontRead', ' ISBN: 8008800880']);
	});
	test('Does not attempt to return book if lentBooks has none', () => {
		let store = [];
		let lentBooks = [];
		expect(LibSys.returnBook(lentBooks, 1, store)).not.toBe(['Index: 1', ' Name: Tendril', ' Author: Miracle Nmesoma', ' ISBN:0000000000']);
	});
});

describe ('Decides what function to run based on action', () => {

	test('Returns action when valid action is inputted', () => {
		expect(LibSys.doAction('a')).toBe('a');
	});
	test('Returns "invalid action" when invalid action is inputted', () => {
		expect(LibSys.doAction('f')).not.toBe('f');
	});
	test('Returns action even when action is inputted in UPPER CASE', () => {
		expect(LibSys.doAction('DONATE BOOK')).toBe('donate book');
	});
});

describe ('Returns "Bye" if input is true', () => {

	test('Returns "Bye" if input to end is true', () => {
		expect(LibSys.leaveStore(true)).toBe('Bye');
	});
	test('Returns "Back to store" if input is false', () => {
		expect(LibSys.leaveStore(false)).toBe('Back to store');
	});
});

describe ('Returns "Logged in" if input is true, if false return "Bye fr"', () => {

	test('Returns "Logged in" if input to login is true', () => {
		expect(LibSys.loginAgain(true)).toBe('Logged in');
	});
	test('Returns "Bye fr" if input is false', () => {
		expect(LibSys.loginAgain(false)).toBe('Bye fr');
	});
});

describe ('Returns "account is logged in"', () => {

	test('When admin', () => {
		expect(LibSys.wrapper(true, '')).toBe('Admin. is logged in.');
	});
	test('When other user', () => {
		expect(LibSys.wrapper(false, 'Miracle Narcissist')).toBe('Miracle Narcissist is logged in.');
	});
});





