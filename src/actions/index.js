import {
  SELECT_IMAGE,
} from "./types";

export const selectImage = imageUrl => dispatch => {
  dispatch({
    type: SELECT_IMAGE,
    payload: imageUrl
  });
};

