import React from "react";
import { Card, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import colors from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
  root: {},
  card: {},
  memberPhoto: { height: 300, width: 300, backgroundSize: "" },
}));

const Member = (props) => {
  const {
    member: { id, name, image, facebook, description },
  } = props;
  const classes = style();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={classes.memberPhoto}
        />
      </Card>
    </div>
  );
};

export default Member;
