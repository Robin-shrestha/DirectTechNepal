import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  GridList,
  GridListTile,
  Grid,
  CardActionArea,
  // Modal,
  Backdrop,
} from "@material-ui/core";

const colsSelector = (index) => {
  if (index % 10 === 0 || index % 10 === 6) {
    return 2;
  } else {
    return 1;
  }
};
function importAll(r) {
  console.log(r);
  return r.keys().map(r);
}
const images = importAll(
  require.context("../../media/gallery/", true, /\.(png|jpe?g|svg)$/)
);

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(4),
    backgroundColor: "black",
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Gallery = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  console.log(images);

  const handleOpen = (tile) => {
    // e.preventDefault();
    setOpen(true);
    setCurrentImage(tile);
  };
  const handleClose = () => {
    setOpen(false);
    setCurrentImage("");
  };

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item sm={1} />
        <Grid item xs={12} sm={10}>
          <GridList
            cellHeight={240}
            className={classes.gridList}
            cols={3}
            component="div"
          >
            {images.map((tile, index) => (
              <GridListTile
                key={tile}
                component="div"
                cols={colsSelector(index)}
              >
                <CardActionArea
                  className={classes.gridImageContainer}
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpen(tile);
                  }}
                >
                  {/* <div style={{ backgroundImage: `url(${tile})` }} /> */}
                  <img src={tile} alt="asd" className={classes.image} />
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
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <div>
          <img
            src={currentImage}
            alt="current"
            className={classes.modalImage}
          />
        </div>
      </Backdrop>
    </div>
  );
};

export default Gallery;
