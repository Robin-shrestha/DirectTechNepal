import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  Grid,
  CardActionArea,
  Backdrop,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { fetchGallery } from "../../actions/galleryActions";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: "white",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      paddingTop: theme.spacing(3),
    },
  },
  gridList: {
    width: "100%",
  },
  gridImageContainer: { height: "100%" },
  image: {
    height: "100%",
    objectFit: "fill",
    cursor: "pointer",
    width: "100%",
  },
  image2Cols: {
    height: "100%",
    objectFit: "cover",
    cursor: "pointer",
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
const colsSelector = (index) => {
  if (index % 10 === 0 || index % 10 === 6) {
    return 2;
  } else {
    return 1;
  }
};

const Gallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const galleryItems = useSelector(
    (state) => state.galleryReducer.galleryItems
  );
  const dispatch = useDispatch();

  const handleOpen = (tile) => {
    // e.preventDefault();
    setOpen(true);
    setCurrentImage(tile);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentImage("");
  };

  useEffect(() => {
    dispatch(fetchGallery());
  }, [galleryItems]);

  return (
    <>
      <div style={{ height: 60, backgroundColor: "black" }}></div>

      <div className={classes.root}>
        <Grid container>
          <Grid item sm={1} />
          <Grid item xs={12} sm={10}>
            <GridList
              cellHeight={window.innerWidth < 550 ? 180 : 360}
              className={classes.gridList}
              cols={3}
              component="div"
            >
              {galleryItems.map((tile, index) => (
                <GridListTile
                  key={tile.id}
                  component="div"
                  cols={colsSelector(index)}
                  // rows={colsSelector(index)}
                >
                  <CardActionArea
                    className={classes.gridImageContainer}
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpen(tile.image);
                    }}
                  >
                    {/* <div style={{ backgroundImage: `url(${tile})` }} /> */}
                    <img
                      src={tile.image}
                      alt={`${tile.title}`}
                      className={clsx({
                        [classes.image]: colsSelector(index) === 1,
                        [classes.image2Cols]: colsSelector(index) === 2,
                      })}
                    />
                  </CardActionArea>
                  {/* <img
                  src={tile}
                  alt={`illustration-${index}`}
                  className={classes.image}
                /> */}
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid item sm={1} />
        </Grid>
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleClose}
        >
          <div>
            <img
              src={currentImage}
              alt="current"
              className={classes.modalImage}
            />
          </div>
        </Backdrop>
      </div>
    </>
  );
};

export default Gallery;
