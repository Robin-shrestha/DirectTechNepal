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
  },
  title: { paddingTop: theme.spacing(2), paddingLeft: theme.spacing(2) },
  mediaContainer: {
    padding: theme.spacing(2),
    display: "flex",
    // justifyContent: "space-between",
  },
  infoSpan: {
    paddingRight: theme.spacing(1),
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
      <Typography variant="h5" align="left" className={classes.title}>
        Catch us on
      </Typography>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <PhoneIcon />
        </span>
        <span className={classes.infoSpan}>{contacts.phoneNo}</span>
      </div>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <EmailIcon />
        </span>
        <span className={classes.infoSpan}>{contacts.email}</span>
      </div>
      <Link
        href={contacts.facebook}
        color="inherit"
        className={classes.mediaContainer}
      >
        <span className={classes.infoSpan}>
          <FacebookIcon />
        </span>
        <span className={classes.infoSpan}>{"/directtechnepal"}</span>
      </Link>
      <Link
        href={contacts.instagram}
        color="inherit"
        className={classes.mediaContainer}
      >
        <span className={classes.infoSpan}>
          <InstagramIcon />
        </span>
        <span className={classes.infoSpan}>{"@directtechnepal"}</span>
      </Link>
      <div className={classes.mediaContainer}>
        <span className={classes.infoSpan}>
          <WhatsAppIcon />
        </span>
        <span className={classes.infoSpan}>{"whatsapp"}</span>
      </div>
    </div>
  );
};

export default ContactInfo;
