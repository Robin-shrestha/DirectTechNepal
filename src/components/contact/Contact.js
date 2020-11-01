import React from "react";
import MessageForm from "./MessageForm";
import ContactInfo from "./ContactInfo";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contactUsImg from "../../media/contacts/Contact-us.png";

import Googlemap from "./GoogleMap";

const styles = makeStyles((theme) => ({
  root: {
    // marginTop: theme.spacing(7),
    backgroundColor: "white",

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
    color: "white",
  },
  background: {
    backgroundImage: `url(${contactUsImg})`,
    backgroundSize: "contain",
    backgroundColor: "#FBA642",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
    },
  },
}));
const Contact = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {/* <Typography variant="h3" gutterBottom align="center" >
        contacts
      </Typography> */}
      <Grid container>
        <Grid
          container
          item
          xs={12}
          style={{ height: 80, backgroundColor: "#FBA642" }}
        />

        <Grid container item xs={12}>
          <Grid
            container
            item
            sm={12}
            className={classes.background}
            // style={{
            //   backgroundImage: `url(${contactUsImg})`,
            //   backgroundSize: "contain",
            //   backgroundColor: "#FBA642",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center center",
            // }}
          >
            <Grid item xs={12} md={4}>
              <div
                style={{
                  width: "100%",
                  // backgroundColor: "black",
                  // height: 200,
                  margin: 16,
                }}
              >
                <MessageForm />
              </div>
            </Grid>
            <Grid item xs={0} md={5} />

            <Grid item xs={12} md={3} style={{ alignSelf: "center" }}>
              <div
                style={{
                  marginLeft: 16,
                  marginRight: 16,
                }}
              >
                <ContactInfo />
              </div>
            </Grid>
          </Grid>

          <Grid container item xs={12} md={9}>
            {/* <div
              style={{
                width: "100%",
                backgroundColor: "black",
                // height: 200,
                margin: 16,
              }}
            >
              <MessageForm />
            </div> */}
          </Grid>
          <Grid container item xs={12}>
            <div
              style={{
                width: "100%",
                backgroundColor: "inherit",
              }}
            >
              <Googlemap />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
