import React from "react";
import {
  Card,
  CardContent,
  Paper,
  Typography,
  Link,
  CardActions,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const style = makeStyles((theme) => ({
  root: {},
  card: {
    display: "flex",
    color: "white",
    flexDirection: "row",
    padding: theme.spacing(3),
    backgroundColor: "inherit",
    alignItems: "center",
    minHeight: "30ch",
    [theme.breakpoints.down(450)]: {
      flexDirection: "column",
    },
  },
  cardEven: {
    backgroundColor: "#4895BB",
    // borderRadius: "5px 50px 5px 50px",
    borderRadius: "60px 45px 30px 15px/15px 30px 45px 60px",
    // borderRadius: "25px",
  },
  cardOdd: {
    backgroundColor: "#A7D251",
    // borderRadius: "50px 5px 50px 5px",
    borderRadius: "45px 60px 15px 30px/30px 15px 60px 45px",
    // borderRadius: "25px",
  },
  circleImageContainer: {
    margin: theme.spacing(1),
    minWidth: "200px",
    minHeight: "200px",

    maxWidth: "200px",
    maxHeight: "200px",
    borderRadius: "50%",
    WebkitBorderRadius: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
  cardContainer: {},
}));

const Member = (props) => {
  const {
    member: { id, name, image, facebook, description },
  } = props;
  const classes = style();
  return (
    <div className={classes.root}>
      <Card
        className={clsx(
          classes.card,
          id % 2 === 0 ? classes.cardEven : classes.cardOdd
        )}
      >
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={classes.circleImageContainer}
        />
        <CardContent className={classes.cardContainer}>
          <Typography variant="h6" align="center" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <CardActions>
            <Typography variant="subtitle2">
              Find{" "}
              <Link href="#" color="inherit" underline="always">
                {name}
              </Link>{" "}
              at facebook
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default Member;