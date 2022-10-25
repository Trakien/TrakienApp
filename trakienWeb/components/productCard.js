import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.getLast = this.getLast.bind(this);
  }

  getLast(updateDates) {
    let res = new Date(updateDates[updateDates.length - 1]);
    return res.toLocaleDateString("en-US");
  }

  render() {
    return (
      <Card sx={{ m: 1, minWidth: 220 }}>
        <CardHeader
          title={"Name: " + this.props.name}
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
            component="h2"
            variant="h3"
            align="left"
            color="text.primary"
          >
            Minimum Price: {this.props.prices}
          </Typography>
          <Typography component="h3" variant="h4" align="left">
            Store: <a href={this.props.url}>{this.props.minName}</a>
          </Typography>
          <Typography component="h5" variant="h6" align="right">
            Update Date: {this.getLast(this.props.updateDates)}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
