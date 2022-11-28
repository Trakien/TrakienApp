import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import React from "react";
import { Grid } from "@mui/material";
import styles from "../../styles/dashboard/Products.module.css";

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

export default class multipleFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.setter(event.target.value);
  }

  render() {
    return (
      <Grid item xs={12}>
        <FormControl className={styles.filterObject}>
          <InputLabel id="label">{this.props.name}</InputLabel>
          <Select
            labelId="label"
            id="multiple-checkbox"
            multiple
            value={this.props.value}
            onChange={this.handleChange}
            input={<OutlinedInput label={this.props.name} />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem disabled value="">
              <em>Seleccione una {this.props.name.toLowerCase()}...</em>
            </MenuItem>
            {this.props.list.map((item) => (
              <MenuItem key={item} value={item}>
                <Checkbox checked={this.props.value.indexOf(item) > -1} />
                <ListItemText primary={item} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    );
  }
}
