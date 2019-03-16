import { combineReducers } from "redux";
import { setTasksReducer } from "./setTasksReducer";
import { showTypeReducer } from "./showTypeReducer";

export default combineReducers({
  allTasks: setTasksReducer,
  showType: showTypeReducer
});
