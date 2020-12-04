import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const styles = makeStyles((theme) => ({
  sticky: {
    // position: "-webkit-sticky",
    position: "fixed",
    bottom: 15,
    right: 25,
    backgroundColor: theme.palette.color1,
    padding: theme.spacing(1),
    borderRadius: "50%",
  },
  arrow: {
    color: "white",
  },
}));
const toHeader = () => {
  const classes = styles();
  return (
    <span className={classes.sticky}>
      <Tooltip title="jump to top">
        <IconButton
          component={RouterLink}
          to="#header"
          className={classes.arrow}
        >
          <ArrowUpwardIcon />
        </IconButton>
      </Tooltip>
    </span>
  );
};

export default toHeader;
