import { FETCH_GALLERY_ITEMS, DELETE_IMAGE } from "../constants";

const initialState = {
  galleryItems: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY_ITEMS: {
      return { ...state, galleryItems: action.payload };
    }
    case DELETE_IMAGE: {
      const newGallery = state.galleryItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, galleryItems: newGallery };
    }
    default:
      return state;
  }
};
export default galleryReducer;
