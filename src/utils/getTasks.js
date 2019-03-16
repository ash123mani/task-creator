export const getTasks = () => {
  var allTasks;
  if (localStorage.tasks.length) {
    allTasks = JSON.parse(localStorage.getItem("tasks"));
  }
  return allTasks;
};
