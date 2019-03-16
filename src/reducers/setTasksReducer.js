import { SET_TASKS } from "../actions/types";

const initialState = {
  tasks: []
};

export const setTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};
