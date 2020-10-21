import React from "react";
import MessageForm from "./MessageForm";
import ContactInfo from "./ContactInfo";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contactUsImg from "../../media/contacts/Contact-us.png";

import Googlemap from "./GoogleMap";

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(9),
  },
}));
const Contact = () => {
  const classes = styles();
  console.log(process.env.REACT_APP_GOOGLE_API_KEY);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom align="center">
        contacts
      </Typography>
      <Grid container>
        <Grid item xs={1} />
        <Grid container item xs={10}>
          <Grid item xs={12} md={9}>
            <div
              style={{
                // background: "darkred",
                backgroundImage: `url(${contactUsImg})`,
                height: "450px",
                marginLeft: 16,
                marginRight: 16,
                backgroundSize: "contain",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div
              style={{
                marginLeft: 16,
                marginRight: 16,
              }}
            >
              <ContactInfo />
            </div>
          </Grid>
          <Grid container item xs={12} md={9}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#eee",
                // height: 200,
                margin: 16,
              }}
            >
              <MessageForm />
            </div>
          </Grid>
          <Grid container item xs={12}>
            <div
              style={{
                width: "100%",
                margin: 16,
              }}
            >
              <Googlemap />
            </div>
          </Grid>
        </Grid>

        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default Contact;
