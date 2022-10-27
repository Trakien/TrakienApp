import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import React from "react";
import styles from "../styles/dashboard/Products.module.css";

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
      <div>
        <FormControl sx={{ m: 1, width: 250 }} className={styles.search}>
          <TextField
            id="search-bar"
            className="text"
            s
            onChange={this.handleChange}
            label="Search by name"
            variant="outlined"
            placeholder="Search..."
            value={this.props.search}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </FormControl>
      </div>
    );
  }
}
