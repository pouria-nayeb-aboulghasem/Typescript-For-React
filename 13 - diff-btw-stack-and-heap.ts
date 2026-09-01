// stack: short term memory

const movieTitle: string = "Inception";

let movieTitleClone: string = movieTitle;
movieTitleClone = "The Dark Knight";

console.log(movieTitleClone, movieTitle); // title change in only one

// ******

// Heap: long term memory

type Book = {
  id: number;
  title: string;
  isbn: string;
  author: string;
};

const book: Book = {
  id: 1,
  title: "The Great Gatsby",
  isbn: "978-0743273565",
  author: "F. Scott Fitzgerald",
};

let bookClone: Book = book;
bookClone.title = "To Kill a Mockingbird";

console.log(bookClone, book); // title change in both
