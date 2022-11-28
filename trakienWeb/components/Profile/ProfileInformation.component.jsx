import React from "react";
import { Box, Grid } from "@mui/material";
import ProfileFile from "./ProfileFile.component";

import FullButton from "../Buttons/FullButton";
import ProfileFileSection from "./ProfileFileSection.component";
export default function ProfileInformation(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={4}>
        <Grid container>
          <Grid item xs={12}>
            <Box>
              <h4>MEMBRESÍA Y FACTURACIÓN</h4>
              <br></br>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={5}>
            <Box>
              <FullButton
                title="Cancelar membresía"
                action={() => {
                  location.href = "/signup";
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Box>
          <ProfileFileSection>
            <ProfileFile
              text={props.customer.name}
              textChange="Cambio Nombre"
            />
            <ProfileFile textChange="Cambio Contraseña" />
            <ProfileFile
              text={"Email: " + props.customer.email}
              textChange="Cambiar Telefono"
            />
          </ProfileFileSection>
          <ProfileFileSection>
            <ProfileFile
              text="1234 1234 1234 1234"
              textChange="Administrar información de pago"
            />
            <ProfileFile text="Tu próxima fecha de facturación es el 25 de noviembre de 2022" />
          </ProfileFileSection>
        </Box>
      </Grid>
    </Grid>
  );
}
