import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  editor: {
    height: "80vh",
  },
}));
const CreateBlog = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  const classes = styles();
  const onSave = () => {
    console.log(value);
  };
  return (
    <div className={classes.root}>
      <div style={{ height: 60, backgroundColor: "black" }} />

      <div>
        <MDEditor
          value={value}
          onChange={setValue}
          height={window.innerHeight}
        />
        {/* <MDEditor.Markdown source={value} /> */}
      </div>
      <Button onClick={onSave} color="secondary" variant="contained">
        Save
      </Button>
    </div>
  );
};

export default CreateBlog;
