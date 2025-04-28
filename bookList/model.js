const bookList = [
  {
    id: 1,
    title: "The Secret Life of Bees",
    author: "Sue Monk Kidd",
  },
  {
    id: 2,
    title: "Cosmos",
    author: "Carl Sagan",
  },
  {
    id: 3,
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
  },
  {
    id: 4,
    title: "How to Bake Pi",
    author: "Eugenia Cheng",
  },
  {
    id: 5,
    title: "Lord of the Flies",
    author: "William Golding",
  },
];

const showAllBooks = () => {
  return bookList;
};
const showBookById = (id) => {
  return bookList.find((book) => book.id == id);
};
const addBookToList = (book) => {
  bookList.push(book);
  return book;
};

const updateBookById = (id, replacementBook) => {
  console.log("hello", id);
  let oldBook = bookList.find((book) => book.id == id);
  console.log(oldBook);
  if (oldBook) {
    bookList.splice(bookList.indexOf(oldBook), 1, replacementBook);
    console.log(oldBook);
  } else {
    throw new Error("out of bounds");
  }

  return bookList;
};

const deleteBookById = (id) => {
  const bookToDelete = bookList.find((book) => book.id == id);
  if (bookToDelete) {
    console.log(bookList.indexOf(bookToDelete));
    bookList.splice(bookList.indexOf(bookToDelete), 1);

    console.log("Book deleted successfully");
  } else {
    throw new Error("out of bounds");
  }
};

module.exports = {
  showAllBooks,
  showBookById,
  addBookToList,
  updateBookById,
  deleteBookById,
};
