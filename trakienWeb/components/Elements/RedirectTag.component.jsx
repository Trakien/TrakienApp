import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

class RedirecTag extends Component {
  constructor(props) {
    super();
    this.state = {
      redirectUrl: props.redirectUrl,
      information: props.info,
      color: props.color,
    };
  }

  render() {
    return (
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Link
            style={{
              color: this.state.color,
            }}
            href={this.state.redirectUrl}
          >
            {this.state.information}
          </Link>
        </Grid>
      </Grid>
    );
  }
}
export default RedirecTag;
