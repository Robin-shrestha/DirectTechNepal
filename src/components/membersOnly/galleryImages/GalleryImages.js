import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery, deleteItem } from "../../../actions/galleryActions";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Backdrop,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = makeStyles((theme) => ({
  container: { margin: theme.spacing(4, 0, 4, 0) },
  icon: {
    color: "white",
    "&:hover": {
      opacity: 0.85,
    },
  },
  image: {
    // objectFit: "cover",
    width: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  modalImage: {
    height: "90vh",
    width: "90vw",
    objectFit: "contain",
  },
}));

const GalleryImages = (props) => {
  const classes = styles();
  const [openImage, setOpenImage] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [toDeleteId, setToDeleteId] = useState(null);
  const galleryItems = useSelector(
    (state) => state.galleryReducer.galleryItems
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // if (!galleryItems || !galleryItems.length) {
    dispatch(fetchGallery());
    // }
  }, []);

  const handleOpenImage = (tile) => {
    // e.preventDefault();
    setOpenImage(true);
    setCurrentImage(tile);
  };
  const handleCloseImage = () => {
    setOpenImage(false);
    setCurrentImage("");
  };
  const handleOpenDialog = (id) => (e) => {
    e.preventDefault();
    setOpenDialog(true);
    setToDeleteId(id);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setToDeleteId(null);
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteItem(toDeleteId));
    setOpenDialog(false);
    setToDeleteId(null);
    props.history.push("/members/gallery");
  };

  return (
    <div>
      <div style={{ height: 60, backgroundColor: "black" }} />
      <Grid container className={classes.container}>
        <Grid item sm={1} />
        <Grid
          item
          sm={10}
          //   style={{ height: 60, backgroundColor: "red" }}
        >
          <GridList cellHeight={window.innerWidth < 550 ? 180 : 300} cols={2}>
            {galleryItems.map((tile) => (
              <GridListTile key={tile.id}>
                {/* <CardActionArea> */}
                <img
                  src={tile.image}
                  alt={tile.title}
                  className={classes.image}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenImage(tile.image);
                  }}
                />
                {/* </CardActionArea> */}
                <GridListTileBar
                  title={tile.title}
                  subtitle={<span>by: {tile.artist}</span>}
                  actionIcon={
                    <IconButton
                      className={classes.icon}
                      onClick={handleOpenDialog(tile.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid item sm={1} />
      </Grid>
      <Backdrop
        className={classes.backdrop}
        open={openImage}
        onClick={handleCloseImage}
      >
        <div>
          <img
            src={currentImage}
            alt="current"
            className={classes.modalImage}
          />
        </div>
      </Backdrop>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you wnat to delete this image from the server
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default GalleryImages;
