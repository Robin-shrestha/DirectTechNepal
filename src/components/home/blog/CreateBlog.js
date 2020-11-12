import React from "react";
import MDEditor from "@uiw/react-md-editor";

const CreateBlog = () => {
  const [value, setValue] = React.useState("**Hello world!!!**");
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
      <MDEditor.Markdown source={value} />
    </div>
  );
};

export default CreateBlog;
