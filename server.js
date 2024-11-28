const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here
app.get("/", (req, res) => {
  res.send("Home! >O<");
});

// books
app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books/:book_id", (req, res) => {
  const book_id = req.params.book_id;
  const selected = books.find((book) => book.id === book_id);
  const bookAuthor = authors.find((author) => author.id === selected.authorId);
  const final = {
    id: selected.id,
    title: selected.title,
    description: selected.description,
    authorId: selected.authorId,
    name: bookAuthor.name,
    bio: bookAuthor.bio,
  };
  res.send(final);
});

// reviews
app.get("/reviews", (req, res) => {
  res.send(reviews);
});

app.get("/reviews/:review_id", (req, res) => {
  const review_id = req.params.review_id;
  const selectedReview = reviews.find((review) => review.id === review_id);
  const selected = books.find((book) => book.id === selectedReview.bookId);
  const final = {
    id: selectedReview.id,
    text: selectedReview.text,
    bookId: selected.id,
    book_title: selected.title,
  };
  res.send(final);
});

// author
app.get("/authors", (req, res) => {
  res.send(authors);
});

app.get("/authors/:author_id", (req, res) => {
  const author_id = req.params.author_id;
  const selected = authors.find((author) => author.id === author_id);
  res.send(selected);
});

app.listen(5555, () => {
  console.log("Bookstore app is running at http://localhost:5555");
});
