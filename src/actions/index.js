import { SHOW_TYPE } from "./types";

export const createTask = task => {
  if (localStorage.tasks) {
    let tasksData = JSON.parse(localStorage.getItem("tasks"));
    tasksData.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasksData));
  }
};

export const showType = type => {
  return {
    type: SHOW_TYPE,
    payload: type
  };
};
