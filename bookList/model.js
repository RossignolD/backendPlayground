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

const updateBookById = (id) => {
  const bookIndex = bookList.findIndex((book) => book.id == id);
  if (bookIndex < 0) throw new Error("out of bounds");
  bookList.splice(bookIndex, 1, book);
  return bookList;
};

const deleteBookById = (id) => {
  const bookIndex = bookList.findIndex((book) => book.id == id);
  if (bookIndex < 0) throw new Error("out of bounds");
  bookList.splice(bookIndex, 1);
  console.log("Book deleted successfully");
};

module.exports = {
  showAllBooks,
  showBookById,
  addBookToList,
  updateBookById,
  deleteBookById,
};
