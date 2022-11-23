import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import Charts from "./charts.component";
import React from "react";

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card sx={{ m: 1, minWidth: 220 }}>
        <CardHeader
          title={"Name: " + this.props.name}
          subheader={"Brand: " + this.props.brand}
          titleTypographyProps={{ align: "left" }}
          subheaderTypographyProps={{
            align: "left",
          }}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
          }}
        />
        <CardContent>
          <Typography
            component="h4"
            variant="h5"
            align="left"
            color="text.primary"
          >
            Minimum Price: {this.props.prices}
          </Typography>
          <Typography component="h5" variant="h6" align="left">
            Store: {this.props.minName}
            <a href={this.props.url}>
              <IconButton aria-label="Link" color="secondary">
                <LinkIcon />
              </IconButton>
            </a>
          </Typography>
          <Typography
            component="h5"
            variant="h6"
            align="center"
            margin="0 0 4% 0"
          >
            <Charts name={this.props.name} stores={this.props.stores} />
          </Typography>
          <Typography component="h6" variant="h7" align="right">
            Update Date: {this.props.updateDates}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
