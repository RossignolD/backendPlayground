const express = require("express");
const tasklistRouter = express.Router();
const tasklistModel = require("./model");
const { showTaskById } = require("./model");
const { showAllTasks } = require("./model");

tasklistRouter.get("/", (req, res) => {
  res.json(tasklistModel.showAllTasks());
});

tasklistRouter.get("/:id", (req, res) => {
  res.json(tasklistModel.showTaskById(req.params.id));
});
tasklistRouter.post("/", (req, res) => {
  console.log(showAllTasks());
  tasklistModel.createTask({
    id: tasklistModel.showAllTasks().length + 1,
    title: req.body.title,
    completed: false,
  });
  res.sendStatus(201);
});

tasklistRouter.put("/", (req, res) => {
  if (showTaskById(req.body.id) === undefined) {
    res.status(404).send("Task not found");
    return;
  } else {
    tasklistModel.updateTask(req.body);
    res.sendStatus(204);
  }
});

tasklistRouter.delete("/:id", (req, res) => {
  if (showTaskById(req.params.id) === undefined) {
    res.status(404).send("Task not found");
    return;
  } else {
    const { id } = req.params;
    tasklistModel.deleteTask(id);
    res.sendStatus(204);
  }
});

module.exports = tasklistRouter;
