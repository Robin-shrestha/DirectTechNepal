import React, { useState, useEffect } from "react";
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../media/logo/DT-logo-4.png";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    marginTop: theme.spacing(10),
    paddingTop: theme.spacing(6),
    borderRadius: "25px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "inherit",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    setLoginDetail({ ...loginDetail, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = loginDetail;
    if (!username) {
      console.log("username required");
    } else if (!password) {
      console.log("password required");
    } else {
      dispatch(login({ username, password }));
    }
  };
  return (
    <div
      style={{
        backgroundColor: "orange",
        // paddingTop: "80px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {auth.isAuthenticated ? <Redirect to="/" replace /> : null}

      <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar} src={logo}></Avatar>
          <Typography variant="h5">Sign in</Typography>
          <form className={classes.form} onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              onChange={onChange}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={onChange}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </Container>
      <div style={{ flexGrow: 1 }} />
    </div>
  );
};
export default Login;
