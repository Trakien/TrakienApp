import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import React from "react";

export default class multipleFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
    };
  }

  render() {
    return (
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={this.state.name}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
      >
        {this.props.list.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={this.state.name.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    );
  }
}
