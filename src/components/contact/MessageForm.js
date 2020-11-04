import React, { useState } from "react";
import { TextField, FormControl, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import mailBig from "../../media/contacts/mail-BIG.png";
import { useDispatch } from "react-redux";
import { postMessage } from "../../actions/messageActions";

const styles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(9),
    // backgroundImage: `url(${mailBig})`,
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "center center",
    // backgroundColor: "white",
    background: "inherit",
    borderRadius: 30,
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(3),
    },
  },
  title: { padding: theme.spacing(3, 3, 0, 3), fontWeight: "bold" },
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
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(postMessage(formData));
    setFormData({
      ...formData,
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title} color="textPrimary">
        Send us a message
      </Typography>

      <form className={classes.messageForm} onSubmit={submitHandler}>
        <FormControl
          fullWidth
          className={clsx(classes.fields)}
          style={{ marginRight: 16 }}
          size="medium"
        >
          <TextField
            label="Name"
            name="name"
            onChange={formHandler}
            margin="dense"
            value={formData.name}
          />
        </FormControl>

        <FormControl className={classes.fields} fullWidth>
          <TextField
            name="email"
            onChange={formHandler}
            label="Email"
            margin="dense"
            value={formData.email}
            type="email"
          />
        </FormControl>
        <FormControl className={classes.fields} fullWidth>
          <TextField
            name="subject"
            onChange={formHandler}
            label="Subject"
            margin="dense"
            value={formData.subject}
          />
        </FormControl>
        <FormControl className={classes.fields} fullWidth>
          <TextField
            name="message"
            onChange={formHandler}
            label="Message"
            multiline
            rows={5}
            margin="dense"
            size="medium"
            value={formData.message}
          />
        </FormControl>
        <FormControl className={classes.fields}>
          <Button
            size="large"
            variant="outlined"
            color="default"
            style={{
              marginTop: 16,
              fontWeight: "bold",
              border: "2px solid black",
            }}
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
