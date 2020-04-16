import {
  CLICK_SIDEBAR,
} from "../actions/types";

const INITAL_STATE = {
  isOpen: false
};


export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case CLICK_SIDEBAR:
      return {isOpen: action.payload};
    default:
      return state;
  }
};
