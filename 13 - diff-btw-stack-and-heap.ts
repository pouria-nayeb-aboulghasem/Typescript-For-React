// stack: short term memory

const movieTitle = "Inception";

let movieTitleClone = movieTitle;
movieTitleClone = "The Dark Knight";

console.log(movieTitleClone, movieTitle); // title change in only one

// ******

// Heap: long term memory

const book = {
  id: 1,
  title: "The Great Gatsby",
  isbn: "978-0743273565",
  author: "F. Scott Fitzgerald",
};

let bookClone = book;
bookClone.title = "To Kill a Mockingbird";

console.log(bookClone, book); // title change in both
