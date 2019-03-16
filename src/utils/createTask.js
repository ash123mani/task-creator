export const createTask = task => {
  if (localStorage.tasks) {
    let tasksData = JSON.parse(localStorage.getItem("tasks"));
    tasksData.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }
};
