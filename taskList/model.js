const taskList = [
  {
    id: 1,
    title: "Plan the pizza party",
    completed: false,
  },
];

const createTask = (task) => {
  console.log(task);
  taskList.push(task);
  console.log(taskList);
};
const showAllTasks = () => {
  return taskList;
};
const showTaskById = (id) => {
  return taskList.find((task) => task.id == id);
};

const updateTask = (task) => {
  const taskIndex = taskList.findIndex((t) => t.id == task.id);
  if (taskIndex < 0) throw new Error("out of bounds");
  taskList.splice(taskIndex, 1, task);
};
const deleteTask = (id) => {
  const taskIndex = taskList.findIndex((t) => t.id == id);
  if (taskIndex < 0) throw new Error("out of bounds");
  taskList.splice(taskIndex, 1);
};

module.exports = {
  createTask,
  showAllTasks,
  showTaskById,
  updateTask,
  deleteTask,
};
