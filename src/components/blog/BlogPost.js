import React, { useState, useEffect } from "react";
import {
  Grid,
  CardActionArea,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MDEditor from "@uiw/react-md-editor";
import markdownExample from "./markdown.md";
import showdown from "showdown";
import image from "../../media/gallery/ART-1.png";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link as RouterLink } from "react-router-dom";

const otherBlogs = [
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

const styles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(5),

    minHeight: "100vh",
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      paddingTop: theme.spacing(13),
    },
  },
  topBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 120,
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(1,109,119,1) 0%, rgba(1,109,119,.75) 50%, rgba(255,255,255,1) 100%)",
  },
  readMore: {
    animation: `$introEffect 3500ms ${theme.transitions.easing.easeInOut} `,
  },
  "@keyframes introEffect ": {
    "0%": {
      opacity: 0,
      transform: "translateX(20%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
const BlogPost = () => {
  const classes = styles();
  const [html, setHTML] = useState("");
  useEffect(() => {
    fetch(markdownExample)
      .then((data) => data.text())
      .then((text) => {
        const converter = new showdown.Converter();
        setHTML(converter.makeHtml(text));
      });
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.topBorder} />
      <Grid container>
        <Grid item md={1} />
        <Grid item xs={12} md={8}>
          <div style={{ textAlign: "right", paddingTop: 16 }}>
            <Typography component="span" variant="body1">
              Share this blog on:
            </Typography>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </div>
          <MDEditor.Markdown
            source={html}
            style={{ padding: 16 }}
            alignItems="flex-start"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={3}
          alignItems="flex-start"
          alignContent="flex-start"
          className={classes.readMore}
        >
          <Typography
            variant="h4"
            gutterBottom
            style={{ marginLeft: 16, marginTop: 16 }}
          >
            Read More:
          </Typography>
          {otherBlogs.map((item) => {
            return (
              <Grid
                key={item.id}
                item
                sm={12}
                style={{
                  margin: 16,
                  widht: "100%",
                }}
              >
                <CardActionArea component={RouterLink} to={`/blog/${item.id}`}>
                  <div
                    style={{
                      backgroundImage: `url(${item.image})`,
                      height: 250,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-reoeat",
                    }}
                  ></div>
                  <div>
                    <Typography variant="h6">{item.title}</Typography>
                  </div>
                </CardActionArea>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

export default BlogPost;
