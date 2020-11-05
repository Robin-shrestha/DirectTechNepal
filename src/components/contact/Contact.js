import React from "react";
import MessageForm from "./MessageForm";
import ContactInfo from "./ContactInfo";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contactUsImg from "../../media/contacts/Contact-us.png";

import Googlemap from "./GoogleMap";

const styles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(0),
    },
  },
  background: {
    margin: 24,
    boxShadow: "10px 10px 10px grey",
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
    <>
      <div className={classes.root} id="#contact">
        <Grid container>
          <Grid container item sm={12} className={classes.background}>
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
            <Grid item xs={false} md={5} />

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

          {/* <Grid container item xs={12}>
            <div
              style={{
                width: "100%",
                backgroundColor: "inherit",
              }}
            >
              <Googlemap />
            </div>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
};

export default Contact;
