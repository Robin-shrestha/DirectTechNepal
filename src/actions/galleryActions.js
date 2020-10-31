import { FETCH_GALLERY_ITEMS, FETCH_ERROR, UPLOAD_IMAGE } from "../constants";
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
    .post("/api/gallery/", formData, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log("fuck", err.message);
    });
};

export const fetchGallery = () => (dispatch) => {
  axios
    .get("/api/gallery/")
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
