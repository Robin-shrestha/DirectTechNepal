import {
  FETCH_GALLERY_ITEMS,
  FETCH_ERROR,
  UPLOAD_IMAGE,
  DELETE_IMAGE,
} from "../constants";
import axios from "axios";
import { jsonHeader, tokenConfig } from "../utils/postHeaders";

export const uploadImage = (galleryImage) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  if (token) {
    config.headers["Authorization"] = `token ${token}`;
  }
  const { title, artist, image } = galleryImage;
  //   const body = JSON.stringify({ title, artist, image });
  const formData = new FormData();
  formData.append("image", image);
  formData.append("title", title);
  formData.append("artist", artist);

  axios
    .post(
      "https://robinshrestha.pythonanywhere.com/api/gallery/",
      formData,
      config
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log( err.message);
    });
};
export const deleteItem = (imageId) => (dispatch, getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  if (token) {
    config.headers["Authorization"] = `token ${token}`;
  }
  axios
    .delete(
      `https://robinshrestha.pythonanywhere.com/api/gallery/${imageId}/`,
      config
    )
    .then((res) => {
      // console.log(res);
      dispatch({ type: DELETE_IMAGE, payload: imageId });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchGallery = () => (dispatch) => {
  axios
    .get("https://robinshrestha.pythonanywhere.com/api/gallery/")
    .then((res) => {
      dispatch({
        type: FETCH_GALLERY_ITEMS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
