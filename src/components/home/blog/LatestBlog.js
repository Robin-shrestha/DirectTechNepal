import React from "react";
import image from "../../../media/gallery/ART-1.png";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyes, makeStyles } from "@material-ui/core/styles";

const blogs = [
  {
    id: 1,
    title: "title",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
  },
  {
    id: 2,
    title: "title",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
  },
  {
    id: 3,
    title: "title",
    content:
      "this is the blog, this is the blog. this is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blogthis is the blog",
    image: image,
  },
];

const styles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 0, 0, 0),
    background:
      "linear-gradient(0deg,#fff, #fff 25% , #EDE3C9 25%, #EDE3C9 75% , #fff 75%)",
  },
  card: { margin: theme.spacing(4) },
  image: {
    height: 250,
    width: "100%",
  },
}));
const LatestBlog = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1} />
        <Grid item container xs={10}>
          <Grid
            item
            xs={12}
            style={{
              marginLeft: "24px",
              marginRight: "24px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3" style={{ zIndex: 25 }}>
              Our Latest Blog
            </Typography>
            <Button>See more</Button>
          </Grid>
          {blogs.map((item) => {
            return (
              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                {/* <div
                  style={{ backgroundColor: "red", height: 250, margin: 8 }}
                ></div> */}
                <Card raised className={classes.card}>
                  <CardActionArea>
                    <img src={item.image} className={classes.image} />
                  </CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="body1">
                      {item.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </div>
  );
};

export default LatestBlog;
