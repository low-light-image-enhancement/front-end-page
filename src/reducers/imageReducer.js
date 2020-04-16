import {
  SELECT_IMAGE,
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return { ...action.payload};
    default:
      return state;
  }
};
