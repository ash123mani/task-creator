import { SHOW_TYPE } from "./types";

export const showType = type => {
  return {
    type: SHOW_TYPE,
    payload: type
  };
};
