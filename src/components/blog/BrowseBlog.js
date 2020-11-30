import React from "react";
import {
  Grid,
  Typography,
  Link,
  CardActionArea,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../media/gallery/ART-1.png";
import { Link as RouterLink } from "react-router-dom";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import blogIntro from "../../media/image/Carousel-2.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const styles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
  },
  ourBlog: {
    height: "95vh",
    width: "100%",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  introTextContainer: {
    color: "white",
    position: "relative",
    top: "35%",
    left: 100,
    width: "60vw",
    animation: `$introEffect 3500ms ${theme.transitions.easing.easeInOut} `,

    [theme.breakpoints.down("sm")]: {
      top: "80px",
      left: 10,
      width: "90vw",
    },
  },
  "@keyframes introEffect ": {
    "0%": {
      opacity: 0,
      transform: "translateX(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
  arrowContainer: {},
  downArrow: {
    position: "relative",
    color: "white",
    fontSize: "2.5rem",
    animation: `$arrowMotion 1500ms ${theme.transitions.easing.easeInOut} infinite alternate`,
  },
  "@keyframes arrowMotion": {
    "0%": {
      top: 0,
    },
    "100%": {
      top: 100,
    },
  },
  container: {
    marginTop: theme.spacing(2),
  },
  blogItems: {
    margin: theme.spacing(4, 0, 2, 0),
    "&:hover": {
      cursor: "pointer",

      "& $socialMediaIconContainer": {
        opacity: 1,

        transition: "all .75s ease-in-out",
      },
      "& $blogTitle": {
        textDecoration: "none",
        color: "rgba(0, 0, 0, 0.5)",
        cursor: "pointer",
        transition: "all .5s ease",
      },
      "& $dateAndAuthorContainer": {
        transition: "all .5s ease",
        opacity: 1,
      },
    },
  },
  blogImage: {
    height: 400,
    width: "100%",
    "&:hover": {
      cursor: "pointer",
      opacity: 0.95,
    },
  },
  blogInfo: {
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(6),
    height: "100%",
  },
  blogTitle: {
    color: "inherit",
    textDecoration: "none",
  },
  socialMediaIconContainer: {
    display: "flex",
    justifyContent: "start",
    marginTop: theme.spacing(2),
    opacity: 0,
  },
  dateAndAuthorContainer: {
    opacity: 0.4,
  },
  iconButton: {
    backgroundColor: "rgba(0,0,0,.15)",
    marginRight: theme.spacing(2),
  },
}));
const blogs = [
  {
    id: 1,
    title: "title title titletitletitl title ",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
    author: "author",
    date_posted: "2000/20/20",
  },
  {
    id: 2,
    title: "title",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
    author: "author",
    date_posted: "2000/20/20",
  },
  {
    id: 3,
    title: "title",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
    author: "author",
    date_posted: "2000/20/20",
  },
];

const BrowseBlog = () => {
  const classes = styles();

  return (
    <div className={classes.root}>
      {/* <div style={{ height: 60, backgroundColor: "black" }} /> */}
      <div
        className={classes.ourBlog}
        style={{ backgroundImage: `url(${blogIntro})` }}
      >
        <div className={classes.introTextContainer}>
          <Typography varinat="h6">Hello! Welcome to</Typography>
          <Typography variant="h1">Direct Tech Blog</Typography>
          <Typography variant="body1">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </Typography>
          {/* <IconButton> */}
          <div className={classes.arrowContainer}>
            <ArrowDownwardIcon
              className={classes.downArrow}
              style={{
                fontSize: "2.5rem",
              }}
            />
          </div>
          {/* </IconButton> */}
        </div>
      </div>

      <Grid container>
        <Grid item sm={1} />
        <Grid item sm={10} className={classes.container}>
          {blogs.map((item) => (
            <Grid container key={item.id} className={classes.blogItems}>
              <Grid item sm={12} lg={8}>
                <CardActionArea component={RouterLink} to={`/blog/${item.id}`}>
                  <div
                    style={{ backgroundImage: `url(${item.image})` }}
                    className={classes.blogImage}
                  />
                </CardActionArea>
              </Grid>
              <Grid item sm={12} lg={4}>
                <div className={classes.blogInfo}>
                  <Typography variant="h2" gutterBottom>
                    <Link
                      component={RouterLink}
                      to={`/blog/${item.id}`}
                      className={classes.blogTitle}
                    >
                      {item.title}
                    </Link>
                  </Typography>
                  <div className={classes.dateAndAuthorContainer}>
                    <Typography variant="subtitle1">
                      {item.date_posted}
                    </Typography>
                    <Typography variant="subtitle1">{item.author}</Typography>
                  </div>

                  <div className={classes.socialMediaIconContainer}>
                    <IconButton className={classes.iconButton}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                      <InstagramIcon />
                    </IconButton>
                    <IconButton className={classes.iconButton}>
                      <TwitterIcon />
                    </IconButton>
                  </div>
                </div>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </div>
  );
};
export default BrowseBlog;
