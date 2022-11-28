import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import LinkIcon from "@mui/icons-material/Link";
import IconButton from "@mui/material/IconButton";
import Charts from "./charts.component";
import React from "react";
import { Grid } from "@mui/material";
import Image from "material-ui-image";
import styles from "../../styles/dashboard/Products.module.css";

export default class TaskCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card className={styles.product}>
          <Image alt={this.props.name} src={this.props.img} />
          <CardHeader
            title={"Nombre: " + this.props.name}
            subheader={"Marca: " + this.props.brand}
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
              Precio mínimo: {this.props.prices}
            </Typography>
            <a href={this.props.url} target="_blank">
              <Typography component="h5" variant="h6" align="left">
                Tienda: {this.props.minName}
                <IconButton aria-label="Link" color="secondary">
                  <LinkIcon />
                </IconButton>
              </Typography>
            </a>
            <Typography
              component="h5"
              variant="h6"
              align="center"
              margin="0 0 4% 0"
            >
              <Charts name={this.props.name} stores={this.props.stores} />
            </Typography>
            <Typography component="h6" variant="h7" align="right">
              Fecha de actualización: {this.props.updateDates}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}
