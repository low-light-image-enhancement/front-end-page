import {
  SELECT_IMAGE,
} from "../actions/types";

const INITAL_STATE = {
  imageUrl: ''
};


export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {imageUrl: action.payload};
    default:
      return state;
  }
};
