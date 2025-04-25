const express = require("express");
const app = express();
const port = 3000;
const bookListRouter = require("./routes");

app.use(express.json());

app.use((req, res, next) => {
  const method = req.method;
  const url = req.url;
  console.log(`A ${method} request was made at ${url}`);
  next();
});

app.use("/api/books", bookListRouter);

app.use((req, res, next) => {
  const error = res.statusCode;
  if (error === 404) {
    res.json({
      message: "Book not found",
      errorCode: 404,
    });
  } else if ((error != 200) & (error != 201) & (error != 204)) {
    res.json({
      message: "An error occurred",
      errorCode: error,
    });
  } else {
    next();
  }
});

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
