import {
  SELECT_IMAGE,
  IMAGE_PROCESS
} from "../actions/types";

const INITAL_STATE = {
  imageUrl: '',
  resultImageUrl: ''
};


export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case IMAGE_PROCESS:
      return {...state, resultImageUrl: action.payload};
    case SELECT_IMAGE:
      return {imageUrl: action.payload};
    default:
      return state;
  }
};
