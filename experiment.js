const express = require("express");
const app = express();
const port = 3000;

app.get("/fast", (req, res) => {
  res.send("Fast response");
});

app.get("/slow", (req, res) => {
  console.log("Slow task started");
  setTimeout(() => {
    console.log("Slow task finished");
    res.send("Slow response after 5 seconds!");
  }, 5000); // 5-second delay
});

app.listen(port, () => {
  console.log(`Experiment listening on port ${port}`);
});
