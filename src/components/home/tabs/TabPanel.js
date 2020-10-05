import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Grid,
  Card,
  CardActions,
  CardHeader,
  Typography,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: { background: "#eee", margin: theme.spacing(3, 1, 3, 1) },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: { padding: theme.spacing(2) },
  image: { width: "100%", objectFit: "fit" },
  content: {
    padding: theme.spacing(2),
  },
}));
const TabPanel = (props) => {
  const { value, image, title, description, index, ...other } = props;
  const classes = styles();

  return (
    <Paper
      className={classes.root}
      elevation={2}
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
            <Grid item xs={12} sm={5}>
              <div className={classes.imageContainer}>
                <img src={image} className={classes.image} />
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <div className={classes.content}>
                <Typography variant="h4" align="center" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body1">{description}</Typography>
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
