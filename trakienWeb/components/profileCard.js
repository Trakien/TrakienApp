import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";

export default class CustomerCard extends React.Component {
  
  render() {
    return (
      <Card sx={{ m: 1, minWidth: 220 }}>
        <CardHeader
          title={"Name: " + this.props.name}
          titleTypographyProps={{ align: "center" }}
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
            <Typography component="h3" variant="h4" align="center">
                Last Name: {this.props.lastName}
            </Typography>
            <Typography component="h3" variant="h4" align="right">
                Email: {this.props.email}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
