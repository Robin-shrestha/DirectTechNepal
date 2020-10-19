import React, { useState } from "react";
import { TextField, FormControl, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const styles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(9),
  },
  title: { margin: theme.spacing(1), padding: theme.spacing(0, 0, 0, 3) },
  messageForm: {
    padding: theme.spacing(3),
  },
  fields: {
    marginBottom: theme.spacing(1),
  },
  nameFields: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const MessageForm = () => {
  const classes = styles();
  const [formData, setFormData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    subject: null,
    message: null,
  });
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.title}>
        Any inquiry? send us a message:
      </Typography>
      <form className={classes.messageForm} onSubmit={submitHandler}>
        <div className={classes.nameFields}>
          <FormControl
            fullWidth
            className={clsx(classes.fields)}
            style={{ marginRight: 16 }}
            size="medium"
          >
            <TextField
              label="First Name"
              name="firstName"
              onChange={formHandler}
            />
          </FormControl>
          <FormControl
            fullWidth
            className={clsx(classes.fields)}
            style={{ marginLeft: 16 }}
            size="medium"
          >
            <TextField
              name="lastName"
              onChange={formHandler}
              label="Last Name"
            />
          </FormControl>
        </div>

        <FormControl className={classes.fields} fullWidth>
          <TextField name="email" onChange={formHandler} label="Email" />
        </FormControl>
        <FormControl className={classes.fields} fullWidth>
          <TextField name="subject" onChange={formHandler} label="Subject" />
        </FormControl>
        <FormControl className={classes.fields} fullWidth>
          <TextField
            name="message"
            onChange={formHandler}
            label="Message"
            multiline
            rows={5}
          />
        </FormControl>
        <FormControl className={classes.fields}>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            style={{ marginTop: 16 }}
            type="submit"
          >
            SUBMIT
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default MessageForm;
