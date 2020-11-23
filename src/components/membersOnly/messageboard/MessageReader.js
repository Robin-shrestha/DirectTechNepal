import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Checkbox,
  Button,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import {
  checkSingleMessage,
  deleteSingleMessage,
} from "../../../actions/messageActions";
import { Link as RouterLink } from "react-router-dom";

import * as routes from "../../../constants/routes";

const styles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(9, 6, 6, 6),
    backgroundColor: "orange",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(9, 0, 0, 0),
    },
  },
  paper: {
    // width: "100%",
    // marginBottom: theme.spacing(2),
    padding: theme.spacing(3),
  },
}));

const MessageReader = (props) => {
  const classes = styles();
  const {
    message,
    name,
    id,
    email,
    subject,
    date_added,
    checked,
  } = props.location.state.message;
  const [markAsRead, setMarkAsRead] = useState(checked);
  const [open, setOpen] = useState(false);
  const isInitialMount = useRef(true);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setMarkAsRead(!markAsRead);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(checkSingleMessage(id, markAsRead));
    }
  }, [markAsRead]);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSingleMessage(id));
    props.history.push("/members/messages");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="body1">from: {name}</Typography>
        <Typography variant="body1">email address: {email}</Typography>
        <Typography variant="body1">subject: {subject}</Typography>
        <Typography variant="body1">date: {date_added}</Typography>
        <Checkbox checked={markAsRead} onChange={onChange} />{" "}
        <span>mark as read</span>
        <Typography variant="body1">{message}</Typography>
        <Button variant="contained" color="secondary" onClick={handleClickOpen}>
          Delete
        </Button>
        <Button
          component={RouterLink}
          to={routes.messages}
          color="primary"
          variant="contained"
        >
          Back
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you wnat to delete this emssage
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleDelete}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
  );
};

export default MessageReader;
