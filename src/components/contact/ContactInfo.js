import React from "react";
import { Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import EmailIcon from "@material-ui/icons/Email";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  },
  title: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    color: "black",
  },
  mediaContainer: {
    padding: theme.spacing(2, 0, 0, 2),
    display: "flex",
    // justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      margin: theme.spacing(2, 0, 0, 0),
    },
  },
  infoSpan: {
    color: "black",
    paddingRight: theme.spacing(1),
    fontSize: 24,
  },
  icon: {
    fontSize: "1.9rem",
  },
}));

const contacts = {
  phoneNo: "9841xxxxx",
  email: "info@dt.com",
  facebook: "https://www.facebook.com/directtechnepal/",
  instagram: "https://www.instagram.com/directtechnepal/",
  whatsapp: "xxxxxx",
};
const ContactInfo = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" align="left" className={classes.title}>
        Catch us on
      </Typography>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <PhoneIcon className={classes.icon} />
        </span>
        <span className={classes.infoSpan}>{contacts.phoneNo}</span>
      </div>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <EmailIcon className={classes.icon} style={{ color: "#fff" }} />
        </span>
        <span className={classes.infoSpan}>{contacts.email}</span>
      </div>
      <Link
        href={contacts.facebook}
        color="inherit"
        className={classes.mediaContainer}
      >
        <span className={classes.infoSpan}>
          <FacebookIcon className={classes.icon} style={{ color: "3b5998" }} />
        </span>
        <span className={classes.infoSpan}>{"directtechnepal"}</span>
      </Link>
      <Link
        href={contacts.instagram}
        color="inherit"
        className={classes.mediaContainer}
      >
        <span className={classes.infoSpan}>
          <InstagramIcon
            className={classes.icon}
            style={{ color: "#bc2a8d" }}
          />
        </span>
        <span className={classes.infoSpan}>{"@directtechnepal"}</span>
      </Link>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <WhatsAppIcon className={classes.icon} style={{ color: "#4fce5d" }} />
        </span>
        <span className={classes.infoSpan}>{"whatsapp"}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
