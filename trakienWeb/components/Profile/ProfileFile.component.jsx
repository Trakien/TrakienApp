import React from "react";
import { Box, Grid } from "@material-ui/core";
import style from "../../styles/Profile/Profile.module.css";

export default function ProfileFile(props) {
  return (
    <div className={style.ProfileFile}>
      <Grid container>
        <Grid item xs={6}>
          <Box>
            <span>{props.text}</span>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <a href="#">{props.textChange}</a>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
