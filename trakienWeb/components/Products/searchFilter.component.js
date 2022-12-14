import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import React from "react";
import styles from "../../styles/dashboard/Products.module.css";

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
      <FormControl className={styles.filterObject}>
        <TextField
          id="search-bar"
          className="text"
          onChange={this.handleChange}
          label="Buscar por nombre"
          variant="outlined"
          placeholder="Buscar..."
          value={this.props.search}
        />
      </FormControl>
    );
  }
}
