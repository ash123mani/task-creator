import { SHOW_TYPE } from "../actions/types";

const initialState = {
  type: "all"
};

export const showTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TYPE:
      return Object.assign({}, state, { type: action.payload });
    default:
      return state;
  }
};
