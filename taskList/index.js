const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const bodyParser = require("body-parser");
const tasklistRouter = require("./routes");

app.use(express.urlencoded());
app.use(express.json());
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} ${res.statusCode}`);
//   next();
// });
app.use(morgan("tiny"));
app.use("/api/tasklist", tasklistRouter);
// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
