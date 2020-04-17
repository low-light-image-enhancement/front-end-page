import {
  SELECT_IMAGE,
  CLICK_SIDEBAR,
  IMAGE_PROCESS,
  IMAGE_DONE
} from "./types";

export const selectImage = imageUrl => dispatch => {
  dispatch({
    type: SELECT_IMAGE,
    payload: imageUrl
  });
};

export const clickSidebar = isOpen => dispatch => {
  dispatch({
    type: CLICK_SIDEBAR,
    payload: isOpen
  });
};

export const imageProcess = url => dispatch => {
  dispatch({
    type: IMAGE_PROCESS,
    payload: url
  });
};

export const imageDone = isDone => dispatch => {
  console.log("isDone: ", isDone)
  dispatch({
    type: IMAGE_DONE,
    payload: isDone
  });
};