//let store = [];
//let lentBooks = [];

const LibSys = {
  createBook: (store, newBook) => {

    //var newBook = prompt('\n Please add book in format: "Name, Author, ISBN" separating with comma\'s as shown.').trim();
    if (newBook && /(?:,\s*\S+){2}/.test(newBook)) {
      newBook = newBook.split(',');
      if (newBook.length == 3) {
        if (!isNaN(newBook[2]) && (newBook[2].length == 10 || newBook[2].length == 13)) {
          newBook = ['Index: ' + function() { return store.length + 1 }(), ' Name: ' + newBook[0], ' Author: ' + newBook[1], ' ISBN: ' + newBook[2]]
        } else {
          console.log('ISBN is incorrect.');
          //LibSys.createBook(store,newBook); 
          return 'Incorrect ISBN';
          }
      }
    } else {
        console.log('Incorrect input format');
        //LibSys.createBook(store, newBook);
        return 'Incorrect input format';
      } return newBook
  },

  addBook: (store, newBook) => {
    //if (LibSys.createBook(newBook) == ['Index: ' + function() { return store.length + 1 }(), ' Name: ' + newBook[0], ' Author: ' + newBook[1], ' ISBN: ' + newBook[2]]) {
    store.push(newBook);
    console.log('Succesfully added a book to store.');
    return store[store.length-1]; 
  },

  displayAvailableBooks: (store) => {
    if (store.length === 0) {
      console.log('No books in store at the moment');
      return false;
    } else {
      console.log('Here\'s the list of avalaible books: \n' + store);
      return store;
      }
  },

  lendBook: (store, lendIndex, lentBooks) => {
    if (LibSys.displayAvailableBooks(store)) {
      //let lendIndex = prompt('Please input the INDEX of a book to be lent from this list: ');
      lentBooks.push(store.splice(lendIndex - 1, 1)[0]);
      console.log('Succesfully lent book.');
      return lentBooks;
    } else {return 'No books to lend';}
  },

  displayLentBooks: (lentBooks) => {
    if (lentBooks.length == 0) {
      console.log('No lent/borrowed books to show');
      return false;
    } else {
      console.log('Here\'s the list of lent/borrowed books: \n ' + lentBooks);
      return lentBooks;
    }
  },

  returnBook: (lentBooks, returnIndex, store) => {
    if (LibSys.displayLentBooks(lentBooks)) {
      //let returnIndex = prompt('Please input the INDEX of the book to be returned from this list: ');
      store.push(lentBooks.splice(returnIndex - 1, 1)[0]);
      console.log('Succesfully returned book');
      return store
    }  
  },
 
  doAction: (action) => {
    if (action) {
      action = action.toLowerCase().trim();

      switch (action) {
        case 'a': case 'add book': case 'donate book':
        //LibSys.addBook();
        return action;

        case 'b': case 'lend book': case 'borrow book':
        //LibSys.lendBook();
        return action;

        case 'c': case 'return book':
        //LibSys.returnBook()
        return action;

        case 'd': case 'view available books':
        //LibSys.displayAvailableBooks();
        return action;

        case 'e': case 'view lent books': case 'view borrowed books':
        //LibSys.displayLentBooks();
        return action;

        default: 
        console.log('That was not a valid option. Pls re-enter.');
        //doAction()
        return 'Not a valid option'
        ;
      }
    }
  },

leaveStore: (end) => {
  //var end = confirm('\n Do you want to exit the store?');
  if (end) {
    /*if (action == 'a' || action == 'b' || action == 'c'||action == 'd' || action == 'e') {
      console.log('Thank you for stopping by today.');} else {console.log('\n Thank you for stopping by to ' + action.toLowerCase() + '.');
    }*/
    return 'Bye'
  } else {
    LibSys.doAction(); 
    return 'Back to store'
  }
},

loginAgain: (login) => {
//var login = confirm('\n Login again?');
  if (login) {
    //LibSys.wrapper();
    return 'Logged in'
  } else { //console.log('\n Alright, goodbye then.'); 
        return 'Bye fr'}
    
},


wrapper: (admin, username) => {
  /*let action, userName;
  console.log('Hello and welcome to the book store.');
  let admin = confirm('Are you an Admin?');

  if (admin) {
    action = prompt('\n Hey, Admin, what would you like to do? Pls state either \n a. Add book \n b. Lend book \n c. Return book \n d. View available books or \n e. View lent books \n');
  } else {
    if (!userName) {
      userName = prompt('\n Hey, User, what\'s your name?');
    }
    action = prompt('\n What would you like to do, ' + userName + '? Pls state either \n a. Donate book \n b. Borrow book \n c. Return book \n d. View available books or \n e. View borrowed books \n ');
    }*/
admin? account = 'Admin.' : account = username;
  if (account) {
    return account + ' is logged in.';
    //LibSys.doAction();
    //LibSys.leaveStore();
    //LibSys.loginAgain(); 
    
  } else return 'Not logged in.'
}
}

//LibSys.wrapper();
module.exports = LibSys;