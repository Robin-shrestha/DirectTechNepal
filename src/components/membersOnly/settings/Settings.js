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

const style = makeStyles((theme) => ({
  root: { backgroundColor: "orange", padding: theme.spacing(10, 0, 0, 0) },
  messageForm: {
    padding: theme.spacing(3),
  },
  fields: {
    marginBottom: theme.spacing(1),
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
          <form className={classes.messageForm} onSubmit={submitHandler}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={uploadedImage} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
