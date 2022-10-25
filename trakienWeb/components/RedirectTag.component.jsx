import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

class RedirecTag extends Component {
  constructor(props) {
    super();
    this.state = {
      redirectUrl: props.redirectUrl,
      information: props.info,
    };
  }

  render() {
    return (
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link href={this.state.redirectUrl} variant="body2">
            {this.state.information}
          </Link>
        </Grid>
      </Grid>
    );
  }
}
export default RedirecTag;
