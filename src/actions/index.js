import {
  SELECT_IMAGE,
  CLICK_SIDEBAR,
} from "./types";

export const selectImage = imageUrl => dispatch => {
  dispatch({
    type: SELECT_IMAGE,
    payload: imageUrl
  });
};

export const clickSidebar = isOpen => dispatch => {
  console.log("input:")
  console.log(isOpen)
  dispatch({
    type: CLICK_SIDEBAR,
    payload: isOpen
  });
};
