import {
  SELECT_IMAGE,
} from "./types";

export const selectImage = imageUrl => {
  return {
    type: SELECT_IMAGE,
    payload: imageUrl
  };
};

