import {
  SELECT_IMAGE,
  IMAGE_PROCESS,
  IMAGE_DONE
} from "../actions/types";

const INITAL_STATE = {
  imageUrl: '',
  resultImageUrl: '',
  isDone: false,
};


export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_PROCESS:
      return {...state, resultImageUrl: action.payload};
    case SELECT_IMAGE:
      return {imageUrl: action.payload};
    case IMAGE_DONE:
      return {...state, isDone: action.payload}
    default:
    return state;
  }
};
