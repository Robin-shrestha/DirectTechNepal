import React from "react";
import illustrator from "../../../media/programs logo/adobe illustrator.png";
import animate from "../../../media/programs logo/adobe animate.png";
import adobeXD from "../../../media/programs logo/adobe xd.png";
import blender from "../../../media/programs logo/blender.png";
import react from "../../../media/programs logo/react.png";
import django from "../../../media/programs logo/django.png";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Tooltip } from "@material-ui/core";

//borders
import waveTop from "../../../media/Wave BG/BG3.png";
import waveBottom from "../../../media/Wave BG/BG1.png";

const tools = [
  { id: 1, name: "adobe illustrator", icon: illustrator },
  { id: 2, name: "adobe animate", icon: animate },
  { id: 3, name: "adobe xd", icon: adobeXD },
  { id: 4, name: "adobe blender", icon: blender },
  { id: 5, name: "Reactjs", icon: react },
  { id: 6, name: "Django", icon: django },
];
const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#EDE3C9",
  },
  iconContainers: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  icon: {
    backgroundPosition: "center center",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    height: 140,
    width: 140,
    "&:hover": {
      cursor: "help",
    },
  },
}));
const ToolsUsed = () => {
  const classes = styles();
  return (
    <div className={classes.root}>
      <div
        style={{
          backgroundImage: `url(${waveTop})`,
          height: 140,
          backgroundSize: "cover",
        }}
      />
      <div>
        <Grid container>
          <Grid item sm={1} />

          <Grid item sm={10} className={classes.iconContainers}>
            {tools.map((item, index) => {
              return (
                <Tooltip key={item.id} title={item.name} arrow>
                  <div
                    className={classes.icon}
                    style={{ backgroundImage: `url(${item.icon})` }}
                  />
                </Tooltip>
              );
            })}
          </Grid>
          <Grid item sm={1} />
        </Grid>
      </div>

      <div
        style={{
          backgroundImage: `url(${waveBottom})`,
          height: 140,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};
export default ToolsUsed;
