import * as React from "react";
import { TextField } from "@mui/material";

export default function Email_Password_Fields(props) {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Correo electrónico"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Contraseña"
        type="password"
        id="password"
        autoComplete="current-password"
      />
    </>
  );
}
