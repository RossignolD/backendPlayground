const express = require("express");
const bookListRouter = express.Router();
const bookListModel = require("./model");
const { showAllBooks } = require("./model");
const { showBookById } = require("./model");

function isAuthenticated(req, res, next) {
  console.log(req.headers.authorization);
  if (req.headers.authorization != "Bearer foo") {
    res.json({
      message: "Access unauthorized",
      errorCode: 401,
    });
  } else {
    console.log("Authorization successful");
    next();
  }
}

bookListRouter.get("/", (req, res) => {
  res.json(showAllBooks());
  res.sendStatus(200);
});

bookListRouter.get("/:id", (req, res) => {
  if (showBookById(req.params.id) === undefined) {
    res.sendStatus(404);
  } else {
    res.json(showBookById(req.params.id));
    res.sendStatus(200);
  }
});

bookListRouter.post("/", isAuthenticated, (req, res) => {
  bookListModel.addBookToList({
    id: bookListModel.showAllBooks().length + 1,
    title: req.body.title,
    author: req.body.author,
  });
  res.sendStatus(201);
});

bookListRouter.put("/:id", isAuthenticated, (req, res) => {
  if (showBookById(req.params.id) === undefined) {
    res.sendStatus(404);
    return;
  } else {
    bookListModel.updateBookById(req.params.id, req.body);
    res.sendStatus(204);
  }
});

bookListRouter.delete("/:id", isAuthenticated, (req, res) => {
  if (showBookById(req.params.id) === undefined) {
    res.sendStatus(404);
  } else {
    const { id } = req.params;
    bookListModel.deleteBookById(id);
    res.sendStatus(204);
  }
});

module.exports = bookListRouter;
