import { FETCH_GALLERY_ITEMS, FETCH_ERROR, UPLOAD_IMAGE } from "../constants";

const initialState = {
  galleryItems: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_ITEMS: {
      return { ...state, galleryItems: action.payload };
    }
    default:
      return state;
  }
};
export default galleryReducer;
