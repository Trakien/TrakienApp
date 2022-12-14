import React from "react";
import { Grid, Box } from "@mui/material";
import style from "../../styles/Profile/Profile.module.css";

export default function ProfileSubscriptionInfo(props) {
  return (
    <Grid container>
      <Grid item xs={2}>
        <Box>
          <h2>Cuenta</h2>
        </Box>
      </Grid>
      <Grid item xs={7}>
        <Box>
          <div className={style.divmember}>
            <div>Miembro desde: {props.since}</div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
