import React, { useState } from "react";
import {
  Typography,
  Grid,
  Button,
  FormControl,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../../actions/galleryActions";
import { Link as RouterLink } from "react-router-dom";
import * as routes from "../../../constants/routes";

const style = makeStyles((theme) => ({
  root: {
    backgroundColor: "orange",
    padding: theme.spacing(10, 0, 0, 0),
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  galleryInputForm: {
    padding: theme.spacing(3),
  },
  fields: {
    marginBottom: theme.spacing(1),
  },
  uploadedImage: {
    maxHeight: 600,
    maxWidth: "100%",
    objectFit: "contain",
    margin: "0 auto",
  },
  msgBtn: {
    margin: theme.spacing(3),
  },
}));
const Settings = () => {
  const [galleryImage, setGalleryImage] = useState({
    title: null,
    artist: null,
    image: null,
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const dispatch = useDispatch();
  const classes = style();

  const formHandler = (e) => {
    setGalleryImage({ ...galleryImage, [e.target.name]: e.target.value });
  };

  const fileChange = (e) => {
    try {
      setGalleryImage({
        ...galleryImage,
        [e.target.name]: e.target.files[0],
      });
      setUploadedImage(URL.createObjectURL(e.target.files[0]));
    } catch (error) {
      // console.log(error);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(galleryImage);
    dispatch(uploadImage(galleryImage));
    setGalleryImage({
      ...galleryImage,
      title: null,
      artist: null,
      image: null,
    });
    setUploadedImage(null);
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <form className={classes.galleryInputForm} onSubmit={submitHandler}>
            <FormControl
              fullWidth
              className={classes.fields}
              style={{ marginRight: 16 }}
              size="medium"
            >
              <TextField
                label="Title"
                name="title"
                onChange={formHandler}
                margin="dense"
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.fields}
              style={{ marginRight: 16 }}
              size="medium"
            >
              <TextField
                label="Artist"
                name="artist"
                onChange={formHandler}
                margin="dense"
              />
            </FormControl>
            <FormControl
              fullWidth
              className={classes.fields}
              style={{ marginRight: 16 }}
              size="medium"
            >
              <input
                type="file"
                id="myfile"
                name="image"
                accept=".png,.svg"
                onChange={fileChange}
                required
              />
            </FormControl>

            <FormControl className={classes.fields}>
              <Button
                size="large"
                variant="outlined"
                color="default"
                style={{
                  marginTop: 16,
                  fontWeight: "bold",
                  border: "2px solid black",
                }}
                type="submit"
              >
                SUBMIT
              </Button>
            </FormControl>
          </form>
          <div>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              className={classes.msgBtn}
              component={RouterLink}
              to={routes.messages}
            >
              View Messages
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Demo of uploaded picture</Typography>
          <img
            src={uploadedImage}
            alt={galleryImage.title}
            className={classes.uploadedImage}
          />
        </Grid>
      </Grid>
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};

export default Settings;
