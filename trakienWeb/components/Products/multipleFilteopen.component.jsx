import { FormLabel, FormGroup, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import React from "react";
import { Grid } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default class multipleFilterOpen extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: props.value,
    };
  }

  handleChange(event) {
    this.props.setter(event.target.name);
  }

  render() {
    return (
      <Grid item xs={12}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">{this.props.name}</FormLabel>
          <FormGroup>
            {this.props.list.map((item) => (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.props.value.indexOf(item) > -1}
                    onChange={this.handleChange}
                    name={item}
                  />
                }
                label={item}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
    );
  }
}
