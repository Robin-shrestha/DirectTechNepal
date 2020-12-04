import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5, 0, 0, 0),
    padding: theme.spacing(5, 0, 5, 0),
    background:
      "linear-gradient(#fff, #fff 25% , rgba(0,195,255,0.3) 25%, rgba(0,195,255,0.15) 75% , rgba(0,195,255,0.15) 75%, rgba(0,195,255,0.05) 100%)",
    //   rgba(0,195,255,0.15)
  },
  cardContainer: {
    margin: theme.spacing(2),
    minHeight: 275,
    // border: "black 1px solid",
    display: "flex",
    backgroundColor: "white",
    borderRadius: 15,
    boxShadow: "8px 8px 34px 4px rgba(0,0,0,.25)",
  },
  cardNumbering: {
    padding: theme.spacing(1),
    margin: theme.spacing(2, 2, 2, 3),
    alignSelf: "start",
    fontSize: "40px",
    lineHeight: "50px",
    textAlign: "center",
    fontFamily: "Red Hat Display,sans-serif",
  },
  cardContent: {
    margin: theme.spacing(2, 2, 2, 2),
  },
}));
const CoreValues = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
              <div
                className={classes.cardNumbering}
                style={{
                  color: "#ff4a49",
                }}
              >
                1
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h4" gutterBottom>
                  Respect
                </Typography>
                <Typography variant="body1">
                  {" "}
                  Respect for our clients is DirectTech's most important
                  Character. We vow to partner up with our clients to conquer
                  problems together{" "}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
              <div
                className={classes.cardNumbering}
                style={{
                  color: "#1a29ff",
                }}
              >
                2
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h4" gutterBottom>
                  Passion
                </Typography>
                <Typography variant="body1">
                  Every great dream begins with a dreamer. It is our dream to
                  achieve big things and assist others achieve theirs.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={classes.cardContainer}>
              <div
                className={classes.cardNumbering}
                style={{
                  color: "#fa6549",
                }}
              >
                3
              </div>
              <div className={classes.cardContent}>
                <Typography variant="h4" gutterBottom>
                  Diligence{" "}
                </Typography>
                <Typography variant="body1">
                  Us members at DirectTech take pride on the steady and devouted
                  work we do to accomplish an undertaking. Our clients can count
                  on that.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default CoreValues;
