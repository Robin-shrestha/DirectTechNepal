import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const styles = makeStyles((theme) => ({
  root: {
    background: "inherit",
    margin: theme.spacing(3, 1, 3, 1),
    color: "inherit",
    // border: "white 1px solid",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    margin: theme.spacing(1, 0, 1, 0),
    height: "400px",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: 275,
    },
  },
  // image: { width: "100%", objectFit: "fit" },
  content: {
    padding: theme.spacing(2),
  },
  title: {
    fontWeight: "bolder",
  },
  button: { marginTop: theme.spacing(2) },
}));
const TabPanel = (props) => {
  const { value, image, title, description, index, ...other } = props;
  const classes = styles();

  return (
    <Paper
      className={classes.root}
      elevation={0}
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      <Grid container>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={7}>
              <div
                className={classes.imageContainer}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              >
                {/* <img src={image} className={classes.image} alt="tab panel " /> */}
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className={classes.content}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  className={classes.title}
                >
                  {title}
                </Typography>
                {description()}
                <Button
                  color="inherit"
                  variant="outlined"
                  className={classes.button}
                  component={RouterLink}
                  to="/#contact"
                >
                  contact us
                </Button>
                {/* <Typography variant="body1">{description()}</Typography> */}
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Paper>
  );
};

export default TabPanel;
